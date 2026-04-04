const User = require('../models/User');

const dash = async (req, res) => {
    try {
        // req.userInfo is set by middleware (has userId, userName, userEmail)
        const user = await User.findById(req.userInfo.userId).select('-password');

        res.status(200).json({
            success: true,
            message: `Welcome ${user.name}!`,
            user
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Some error occurred'
        });
    }
}

module.exports = {dash};