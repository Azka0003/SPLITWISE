const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    members: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true     // ✅ since only registered users here
            },
            role: {
                type: String,
                enum: ['admin', 'member'],
                default: 'member'
            }
        }//u can access name from user schema
    ],
    pendingMembers: [
        {
            email: {
                type: String,
                required: true,    // ✅ must exist for invite
                trim: true,
                lowercase: true

            },
            name: {
                type: String,
                trim: true,
            }
        }
    ]

}, { timestamps: true });

module.exports = mongoose.model('Group', GroupSchema);