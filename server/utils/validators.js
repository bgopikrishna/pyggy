const Joi = require('@hapi/joi');
const { WITHDRAW, DEPOSIT } = require('./constants');
/**
 * A validator which checks the client data for creating a goal
 *
 * @param {*} goalObj - Goal object sent from the client
 * @param {*} user - User Id
 * @returns {*} - validated Goal Object
 */
function validatorForCreateGoal(goalObj, user) {
    const schema = Joi.object({
        name: Joi.string()
            .required()
            .trim(),
        target: Joi.number()
            .options({ convert: true })
            .required(),
        description: Joi.string().default(''),
        labels: Joi.array()
            .items(Joi.string())
            .optional()
            .default([]),
        favourite: Joi.boolean()
            .default(false)
            .optional(),
        user: Joi.string().required(),
        color: Joi.string().optional(),
        saved: Joi.number()
            .optional()
            .default(0)
    });
    const validated = schema.validate({ ...goalObj, user });
    return validated;
}

/**
 * A validator which checks the client data for creating a goal
 *
 * @param {*} goalObj - Goal object sent from the client
 * @param {*} user - User Id
 * @returns {*} - validated Goal Object
 */
function validatorForUpdateGoal(goalObj) {
    const schema = Joi.object({
        name: Joi.string()
            .optional()
            .trim(),
        target: Joi.number()
            .options({ convert: true })
            .optional()
            .positive(),
        saved: Joi.number()
            .options({ convert: true })
            .optional()
            .positive(),
        labels: Joi.array()
            .items(Joi.string())
            .optional(),
        favourite: Joi.boolean().optional(),
        archived: Joi.boolean().optional()
    });
    const validated = schema.validate(goalObj);
    return validated;
}

function validatorForUpdateGoalRecord(record) {
    const schema = Joi.object({
        recordType: Joi.string()
            .valid(WITHDRAW, DEPOSIT)
            .required(),
        amount: Joi.number().required()
    });

    const validated = schema.validate(record);

    return validated;
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
    });
    const validated = schema.validate(user);
    return validated;
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
    });
    const result = schema.validate(user);
    return result;
}

module.exports = {
    validatorForCreateGoal,
    validatorForUpdateGoal,
    validatorForUpdateGoalRecord,
    validatorForSignIn,
    validatorForSignUp
};
