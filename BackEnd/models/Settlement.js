const mongoose = require('mongoose');

const SettlementSchema = new mongoose.Schema({
    payer: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
        },
        email: {
            type: String,
            default: null
        }
    },
    payee: {
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
        },
        email: {
            type: String,
            default: null
        }
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    currency: {
        type: String,
        default: 'USD'
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        default: null     // kis group ka settle tha
    },
    note: {
        type: String,
        trim: true        // optional — "GPay se diya" etc
    }

}, { timestamps: true });

module.exports = mongoose.model('Settlement', SettlementSchema);
