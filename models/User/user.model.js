/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-escape */
import { Schema, model } from 'mongoose'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

// eslint-disable-next-line func-names
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_KEY)
    return token
}

const User = model('Users', userSchema)

export { User, userSchema }

export default User
