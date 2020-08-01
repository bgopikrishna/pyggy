const {
    validatorForCreateGoal,
    validatorForUpdateGoal,
    validatorForUpdateGoalRecord
} = require('../utils/validators');
const Goal = require('../models/Goal/goal.model');
const createItem = require('../utils/createItem');
const { WITHDRAW } = require('../utils/constants');

const getAllGoals = async (req, res) => {
    const { id: userId } = req.user;

    try {
        const userGoals = await Goal.find({ user: userId });
        // .populate('completed saved')
        // .cache({
        //     key: userId
        // });
        res.send({ goals: userGoals });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: ' thing went wrong' });
    }
};

const createAGoal = async (req, res) => {
    const goalObj = req.body;
    const { id: user } = req.user;

    console.log('user', req.user);

    const validated = validatorForCreateGoal(goalObj, user);

    if (validated.error) return res.status(400).send(validated.error.details);

    try {
        const goal = await createItem(Goal, { ...validated.value });
        res.send({ goal });
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateAGoal = async (req, res) => {
    const goalObj = req.body;
    const { goalId } = req.params;

    const validated = validatorForUpdateGoal(goalObj);

    if (validated.error && !goalId) {
        return res.status(400).send({
            error: {
                message: 'Error in Updating the data'
            }
        });
    }

    try {
        const goal = await Goal.findByIdAndUpdate(goalId, validated.value, {
            new: true
        });
        res.send({ goal });
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateGoalRecord = async (req, res) => {
    const record = req.body;
    const { goalId } = req.params;

    const validated = validatorForUpdateGoalRecord(record);

    if (validated.error) {
        return res.status(400).send(validated.error.details);
    }

    const rec = { ...validated.value, time: Date.now() };

    if (rec.recordType === WITHDRAW) {
        rec.amount = 0 - rec.amount;
    }
    try {
        const goal = await Goal.findByIdAndUpdate(
            goalId,
            {
                $push: { records: rec }
            },
            {
                new: true
            }
        );
        res.send({ goal });
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteAGoal = async (req, res) => {
    const { goalId } = req.params;
    if (!goalId) {
        return res.status(400).send({
            error: {
                message: 'Error  Deleting the Goal'
            }
        });
    }

    try {
        const goal = await Goal.findByIdAndRemove(goalId);
        if (goal) {
            res.send({ goal });
        } else {
            res.status(400).send({
                error: {
                    message: 'Error in Deleting the Goal'
                }
            });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getAllGoals,
    createAGoal,
    updateAGoal,
    updateGoalRecord,
    deleteAGoal
};
