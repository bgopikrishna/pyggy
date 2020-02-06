import { Schema, model } from 'mongoose'

const goalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    labels: [{ type: String }],
    saved: {
        type: Number,
        default: 0
    },
    target: {
        type: Number,
        required: true
    },
    favourite: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
})

const Goal = model('Goals', goalSchema)

export { Goal, goalSchema }
export default Goal
