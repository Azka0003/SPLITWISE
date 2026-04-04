const User = require('../models/User');
const Group = require('../models/Group');
const Friend = require('../models/Friend');

// ✅ Core logic — helper function
const addGroupMemberHelper = async (groupId, memberEmails, creatorId) => {
    const creator = await User.findById(creatorId);
    const group = await Group.findById(groupId);

    const members = [];
    const pendingMembers = [];

    for (let member of memberEmails) {
        const email = member.email.toLowerCase().trim();
        const name = member.name ? member.name.trim() : email.split('@')[0];

        const user = await User.findOne({ email });

        if (user) {
            const alreadyMember = group.members.some(
                m => m.user.toString() === user._id.toString()
            );
            if (alreadyMember) continue;
            /* if (alreadyMember) {
                            return res.status(400).json({
                                success: false,
                                message: 'User is already a member'
                            });
                        }*/
        }

        if (user) {
            const isCreator = user._id.toString() === creatorId.toString();
            if (!isCreator) {
                members.push({ user: user._id, role: 'member' });
            }
        } else {
            pendingMembers.push({ email, name });
        }

        //add in Friend schema 
        const alreadyInvited = await Friend.findOne({
            requester: creatorId,
            recipient: email
        });
        // reverse check (VERY IMPORTANT)
        let reverseExists = null;
        if (user) {
            reverseExists = await Friend.findOne({
                requester: user._id,
                recipient: creator.email
            });
        }

        if (!alreadyInvited && !reverseExists) {
            await Friend.create({
                requester: creatorId,
                recipient: email,
                status: 'pending',
                groups: [groupId]
            });
        } else if (alreadyInvited || reverseExists) {
            const friendDoc = alreadyInvited || reverseExists;
            friendDoc.groups.push(groupId);  // existing mein groupId add karo
            await friendDoc.save();
        }

        // TODO: send email invite via nodemailer later
    }

    // add
    group.members.push(...members);
    group.pendingMembers.push(...pendingMembers);
    await group.save();
};

const createGroup = async (req, res) => {
    try {
        if (!req.body || !req.body.name) {
            return res.status(400).json({
                success: false,
                message: 'Name is required'
            });
        }

        const { name, description, memberEmails } = req.body;
        // memberEmails → array of emails which will come from frontend
        /*[
            { "email": "priya@gmail.com", "name": "Priya" },
            { "email": "amit@gmail.com", "name": "Amit" }
        ]*/

        const creatorId = req.userInfo.userId;//login info

        const alreadyExists = await Group.findOne({
            createdBy: creatorId,
            name: name,
        });

        if (alreadyExists) {
            return res.status(400).json({
                success: false,
                message: 'Group with same name already exists'
            });
        }

        //for adding creator as a admin member of grp- extracting data
        //    const members = [{ user: creatorId, role: 'admin' }];

        const newGroup = new Group({
            name,
            description,
            createdBy: creatorId, 
            members: [{ user: creatorId, role: 'admin' }],
            pendingMembers: []
        });

        await newGroup.save();

        // ✅ helper call
        if (memberEmails && memberEmails.length > 0) {
            await addGroupMemberHelper(newGroup._id, memberEmails, creatorId);
        }

        const updatedGroup = await Group.findById(newGroup._id);

        res.status(201).json({
            success: true,
            message: 'New Group added',
            group: updatedGroup 
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred'
        });
    }
}

const deleteGroup = async (req, res) => {
    try {
        const groupId = req.params.id;
        const requesterId = req.userInfo.userId;

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({
                success: false,
                message: 'Group not found'
            });
        }

        // only admin can delete a group
        // const requester = group.members.find(
        //     m => m.user.toString() === requesterId
        // );

        // if (!requester || requester.role !== 'admin') {
        //     return res.status(403).json({
        //         success: false,
        //         message: 'Only admin can delete group'
        //     });
        // }





        // group delete karne se pehle — har member ke Friend records clean karo
        for (let member of group.members) {
            const memberUser = await User.findById(member.user);
            if (!memberUser) continue;

            // is user ke saare friend records dhundo jo is group se linked hain
            const friendDocs = await Friend.find({
                groups: groupId,
                $or: [
                    { requester: member.user },
                    { recipient: memberUser.email }
                ]
            });

            for (let friendDoc of friendDocs) {
                // groupId remove karo
                friendDoc.groups = friendDoc.groups.filter(
                    g => g.toString() !== groupId.toString()
                );

                if (friendDoc.groups.length === 0) {
                    // koi aur group nahi — Friend record delete karo
                    await Friend.findByIdAndDelete(friendDoc._id);
                } else {
                    // aur groups hain — sirf save karo
                    await friendDoc.save();
                }
            }
        }

        // pendingMembers ke liye bhi
        for (let pending of group.pendingMembers) {
            const friendDoc = await Friend.findOne({
                groups: groupId,
                recipient: pending.email
            });

            if (friendDoc) {
                friendDoc.groups = friendDoc.groups.filter(
                    g => g.toString() !== groupId.toString()
                );

                if (friendDoc.groups.length === 0) {
                    await Friend.findByIdAndDelete(friendDoc._id);
                } else {
                    await friendDoc.save();
                }
            }
        }

        // Npw delete group
        await Group.findByIdAndDelete(groupId);

        res.status(200).json({
            success: true,
            message: 'Group deleted successfully'
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred'
        });
    }
};

// ✅ addGroupMember — sirf route handler
const addGroupMember = async (req, res) => {
    try {
        if (!req.body || !req.body.memberEmails) {
            return res.status(400).json({
                success: false,
                message: 'No email provided'
            });
        }

        const groupId = req.params.id; // URL
        const creatorId = req.userInfo.userId; // JWT

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({
                success: false,
                message: 'Group not found'
            });
        }

        await addGroupMemberHelper(groupId, req.body.memberEmails, creatorId);

        res.status(200).json({
            success: true,
            message: 'Members added successfully',
            group
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred'
        });
    }
};

const getAllGroups = async (req, res) => {
    try {
        const requesterId = req.userInfo.userId;

        // all the groups where login user is a member either as admin or member
        const groups = await Group.find({ "members.user": requesterId })
            .populate('members.user', 'name email');

        if (groups.length === 0) {
            return res.status(200).json({
                success: true,
                message: 'No groups found'
            });
        }

        res.status(200).json({
            success: true,
            groups
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred'
        });
    }
};

// get group by id

module.exports = {
    createGroup,
    deleteGroup,
    addGroupMember,
    getAllGroups
}


// delete group to delete kr do but check each memeber ke friend doc ko deltee krte time dekho agr grp.lenth>=0 to jo grp ki id h vo delete krdo
// baqi chodh do agr 0 h toh poora page delet krdo

//two cases of getting grp id,adding grp id to friend page if alredy created if not then create and add both;


/* const deleteGroupMember = async (req, res) => {
    try {
        const groupId = req.params.id;
        const { email } = req.body;
        const requesterId = req.userInfo.userId;

        // group find
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({
                success: false,
                message: 'Group not found'
            });
        }

        // only admin can delete
        const requester = group.members.find(
            m => m.user.toString() === requesterId
        );
        if (!requester || requester.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Only admin can remove members'
            });
        }

        //not registred user to ofc vo frind schmena mein store hoga  to aapko srf grp se delte krna hh 
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }


        // admin cant remove himself
        if (user._id.toString() === requesterId) {
            return res.status(400).json({
                success: false,
                message: 'Admin cannot remove himself'
            });
        }

        // member or not
        const isMember = group.members.some(
            m => m.user.toString() === user._id.toString()
        );
        if (!isMember) {
            return res.status(400).json({
                success: false,
                message: 'User is not a member of this group'
            });
        }

        // member remove karo
        group.members = group.members.filter(
            m => m.user.toString() !== user._id.toString()
        );

        await group.save();

        res.status(200).json({
            success: true,
            message: 'Member removed successfully',
            group
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred'
        });
    }
};
*/



// if token not given then what error left