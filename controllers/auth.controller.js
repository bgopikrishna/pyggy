/* eslint-disable prefer-const */
import Joi from '@hapi/joi'
import { compare as comparePassword } from 'bcrypt'

import genHasedPass from '../utils/hash'
import User from '../models/User/user.model'
import createItem from '../utils/createItem'

export const signInUser = async (req, res) => {
    const userObj = req.body

    const validated = validatorForSignIn(userObj)

    if (validated.error) {
        return res.status(400).send(validated.error.message)
    }

    const { email, password } = validated.value

    try {
        const user = await User.findOne({ email: email })
        if (!user) return res.status(400).send({ error: { message: 'User not found' } })

        const isValidPassword = comparePassword(password, user.password)
        if (!isValidPassword) return res.status(400).send({ error: { message: 'Password Incorrect' } })

        const token = user.generateAuthToken()
        res.header('x-authtoken', token).send({
            name: user.name,
            email: user.email
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

export const signUpUser = async (req, res) => {
    const validated = validatorForSignUp(req.body)

    if (validated.error) {
        return res.status(400).send(validated.error.message)
    }

    let { name, email, password } = validated.value

    try {
        password = await genHasedPass(password)
        const user = await createItem(User, { name, email, password })
        const token = user.generateAuthToken()

        res.header('x-authtoken', token).send({
            name: user.name,
            email: user.email
        })
    } catch (error) {
        res.status(404).send(error.message)
    }
}

/**
 * A Joi Validator which validates the user details sent from client for signIn
 *
 * @param {*} user - User Details
 * @returns {*} user - validated user
 */
function validatorForSignIn(user) {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .trim()
            .min(6)
            .required()
    })
    const validated = schema.validate(user)
    return validated
}

/**
 * A Joi Validator which validates the user details sent from client for sign up
 *
 * @param {*} user - User Details
 * @returns {*} user - validated user
 */
function validatorForSignUp(user) {
    const schema = Joi.object({
        name: Joi.string()
            .trim()
            .required()
            .min(2),
        email: Joi.string()
            .trim()
            .email()
            .required(),
        password: Joi.string()
            .trim()
            .min(6)
            .required()
    })
    const result = schema.validate(user)
    return result
}
