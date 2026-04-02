const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require("validator");
const Group = require('../models/Group');

//signUp controller
const signUpUser = async (req, res) => {
    try {
        //extract user information from our request body
        //this username etc should be spell same as declared in schema
        const { name, email, password, currency } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format"
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters"
            });
        }

        //check if user is already exists in our database
        const checkExistingUser = await User.findOne({ email });

        if (checkExistingUser) {
            return res.status(400).json({
                success: false,
                message: 'User is already exists with same email'
            });
        }

        //so if not found then simply store in var like username but cant as for security purpose
        // we need to hash the password usind bcryptjs npm i bcryptjs
        //hash(password: string, salt: number | string): Promise<string>
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create a new user and save in your database
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            currency
        });

        await newUser.save();


        // ✅ Also generate and return token so user is logged in immediately
        if (newUser) {
            const accessToken = jwt.sign(
                {
                    userId: newUser._id,
                    userName: newUser.name,
                    userEmail: newUser.email
                },
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: '7d'
                }
            );

            //after signup successful 
            // check is new user email presnet in pendingMembers or not?
            const groups = await Group.find({
                "pendingMembers.email": newUser.email
            });

            if (groups.length > 0) {
                for (let group of groups) {
                    //add in members
                    group.members.push({
                        user: newUser._id,
                        role: 'member'
                    });

                    //remove from pendingMembers
                    group.pendingMembers = group.pendingMembers.filter(
                        pm => pm.email !== newUser.email
                    );

                    await group.save();
                }
            }

            res.status(201).json({
                success: true,
                message: 'User signed up successfully',
                accessToken
            });


        } else {
            res.status(400).json({
                success: false,
                message: 'Unable to signUp user please try again'
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occured! Please try again'
        });
    }
}

//login controller
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "email and password are required"
            });
        }

        //find if the current user is exists in databse or not 
        const emailVar = await User.findOne({ email });

        if (!emailVar) {
            return res.status(400).json({
                success: false,
                message: `User Doesnt exist!`
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, emailVar.password);

        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid user credentials!'
            });
        }

        //  userId=emailVar._id;

        //if all data matched then we create token called bearer token
        //bearer what it bear it bears info or the credentials of a particular logged in users 
        //create token 
        const accessToken = jwt.sign
            ({
                userId: emailVar._id,
                userName: emailVar.name,
                userEmail: emailVar.email
            },
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: '7d'

                }
            );
        //info stored in token  in encrypted form if u decrypt u'll get actual info

        //return token back
        res.status(200).json({
            success: true,
            message: 'Logged in successful',
            accessToken,
            // userId
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occured! Please try again'
        });
    }
}



module.exports = {
    signUpUser,
    loginUser,
}
