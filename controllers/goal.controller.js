import Goal from '../models/Goal/goal.model';
import createItem from '../utils/createItem';
import { validatorForCreateGoal, validatorForUpdateGoal } from '../utils/validators';

export const getAllGoals = async (req, res) => {
    const { _id: userId } = req.user;

    try {
        const userGoals = await Goal.find({ user: userId });
        res.send({ data: userGoals });
    } catch (error) {
        res.status(500).send(error);
    }
};

export const createAGoal = async (req, res) => {
    const goalObj = req.body;
    const { _id: user } = req.user;

    console.log('Usser', req.user, user);

    const validated = validatorForCreateGoal(goalObj, user);

    if (validated.error) return res.status(400).send(validated.error);

    try {
        const goal = await createItem(Goal, { ...validated.value });
        res.send({ data: goal });
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
        const goal = await Goal.findByIdAndUpdate(goalId, validated.value, { new: true });
        res.send({ data: goal });
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
            res.send('Deleted Successfully');
        } else {
            res.status(400).send('Error Deleting Goal');
        }
    } catch (error) {
        res.status(400).send(error);
    }
};
