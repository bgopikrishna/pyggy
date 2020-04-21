import Goal from '../models/Goal/goal.model';
import createItem from '../utils/createItem';
import {
    validatorForCreateGoal,
    validatorForUpdateGoal
} from '../utils/validators';

export const getAllGoals = async (req, res) => {
    const { id: userId } = req.user;

    try {
        const userGoals = await Goal.find({ user: userId }).cache({
            key: userId
        });
        res.send({ goals: userGoals });
    } catch (error) {
        res.status(500).send({ message: 'Some thing went wrong' });
    }
};

export const createAGoal = async (req, res) => {
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

export const updateAGoal = async (req, res) => {
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

export const deleteAGoal = async (req, res) => {
    const { goalId } = req.params;
    if (!goalId) {
        return res.status(400).send({
            error: {
                message: 'Error in Deleting the Goal'
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
