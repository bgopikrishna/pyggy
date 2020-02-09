import Goal from '../models/Goal/goal.model'

export const getAllGoals = async (req, res) => {
    const { id: userId } = req.user

    try {
        const userGoals = await Goal.find({ user: userId })
        res.send({ data: userGoals })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const createAGoal = (req, res) => {}

export const updateAGoal = (req, res) => {}

export const deleteAGoal = (req, res) => {}
