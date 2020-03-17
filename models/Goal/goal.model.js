/* eslint-disable func-names */
import { Schema, model } from 'mongoose';

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
    archived: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    // eslint-disable-next-line func-names
    completed: {
        type: Boolean,
        default: function() {
            return this.saved === this.target;
        }
    },
    color: {
        type: String,
        default: 'Black'
    }
});

const Goal = model('Goals', goalSchema);

export { Goal, goalSchema };
export default Goal;
