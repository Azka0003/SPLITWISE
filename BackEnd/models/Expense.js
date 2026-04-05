const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    currency: {
        type: String,
        default: 'USD'
    },
    paidBy: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                default: null        //for registered user
            },
            email: {
                type: String,
                default: null        //for unregistered user
            },
            amountPaid: {
                type: Number,
                required: true,
                min: 0
            }
        }
    ],
    splits: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                default: null       //for registered user
            },
            email: {
                type: String,
                default: null       // for unregistered user 
            },
            amountOwed: {
                type: Number,
                required: true,
                min: 0
            },
            isPaid: {
                type: Boolean,
                default: false
            }
        }
    ],

    splitType: {
        type: String,
        enum: ['equal', 'exact', 'percentage'],
        default: 'equal'
    },
    category: {
        type: String,
        enum: ['food', 'travel', 'shopping', 'entertainment', 'utilities', 'rent', 'other'],
        default: 'other'
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        default: null       // null means direct friend expense, not a group expense
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String,
        trim: true
    },
    isSettled: {
        type: Boolean,
        default: false      // flips to true when all splits.isPaid are true
    }

}, { timestamps: true });

// pre save hook — validates totals match
ExpenseSchema.pre('save', function () {
    const totalPaid = this.paidBy.reduce((s, p) => s + p.amountPaid, 0);
    const totalSplit = this.splits.reduce((s, p) => s + p.amountOwed, 0);

    if (Math.abs(totalPaid - this.totalAmount) > 0.01)
        return next(new Error(`paidBy sum (${totalPaid}) must equal totalAmount (${this.totalAmount})`));
    if (Math.abs(totalSplit - this.totalAmount) > 0.01)
        return next(new Error(`splits sum (${totalSplit}) must equal totalAmount (${this.totalAmount})`));

    // next();
});

module.exports = mongoose.model('Expense', ExpenseSchema);