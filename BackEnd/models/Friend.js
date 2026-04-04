const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    recipient: {
        type: String,  // email of invited person
        required: true,
        trim: true,
        lowercase: true
    },
    recipientName: {
        type: String,  // name of invited person
        required: false,
        trim: true,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted'],
        default: 'pending'
    },
    groups: [          // ✅ new field
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group'
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Friend', FriendSchema);