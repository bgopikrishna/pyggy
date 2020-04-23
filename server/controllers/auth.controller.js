/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
const comparePassword = require('bcrypt').compare;
const genHasedPass = require('../utils/hash');
const User = require('../models/User/user.model');
const createItem = require('../utils/createItem');
const {
    validatorForSignUp,
    validatorForSignIn
} = require('../utils/validators');

const signInUser = async (req, res) => {
    const userObj = req.body;

    const validated = validatorForSignIn(userObj);

    if (validated.error) {
        return res.status(400).send(validated.message);
    }

    const { email, password } = validated.value;

    try {
        const user = await User.findOne({ email: email });
        if (!user)
            return res
                .status(400)
                .send({ error: { message: 'User not found' } });

        const isValidPassword = await comparePassword(password, user.password);
        if (!isValidPassword)
            return res
                .status(400)
                .send({ error: { message: 'Password Incorrect' } });

        const token = user.generateAuthToken();
        res.send({
            name: user.name,
            email: user.email,
            // eslint-disable-next-line no-underscore-dangle
            _id: user._id,
            token
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

const signUpUser = async (req, res) => {
    const validated = validatorForSignUp(req.body);

    if (validated.error) {
        return res.status(400).send(validated.error);
    }

    let { name, email, password } = validated.value;

    try {
        password = await genHasedPass(password);
        const user = await createItem(User, { name, email, password });
        const token = user.generateAuthToken();

        res.send({
            name: user.name,
            email: user.email,
            _id: user._id,
            token
        });
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = { signInUser, signUpUser };
