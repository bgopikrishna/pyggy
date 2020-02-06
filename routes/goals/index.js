import { Router } from 'express'
import { getAllGoals, createAGoal, updateAGoal, deleteAGoal } from '../../controllers/goal'

const router = Router()

router
    .get('/:userId', getAllGoals)
    .post('/:goalId', createAGoal)
    .put('/:goalId', updateAGoal)
    .delete('/:goalId', deleteAGoal)

export default router
