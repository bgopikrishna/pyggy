/* eslint-disable func-names */
const { Schema, model } = require('mongoose');
const { WITHDRAW, DEPOSIT } = require('../../utils/constants');

const recordSchema = new Schema({
    amount: Number,
    recordType: {
        type: String,
        enum: [WITHDRAW, DEPOSIT]
    },
    time: {
        type: Date,
        default: Date.now()
    }
});

const goalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    labels: [{ type: String }],
    target: {
        type: Number,
        required: true
    },
    favourite: {
        type: Boolean,
        default: false
    },
    archived: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    color: {
        type: String,
        default: 'Black'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    records: {
        type: [recordSchema],
        default: []
    }
});

goalSchema.virtual('saved').get(function() {
    const totalSaved = this.records.reduce(
        (acc, currentVal) => acc + parseFloat(currentVal.amount),
        0
    );
    return totalSaved;
});

goalSchema.virtual('completed').get(function() {
    const totalSaved = this.records.reduce(
        (acc, currentVal) => acc + parseFloat(currentVal.amount),
        0
    );
    return this.target.target === totalSaved;
});

const Goal = model('Goals', goalSchema);

module.exports = Goal;
