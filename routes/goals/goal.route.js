import { Router } from 'express'
import { getAllGoals, createAGoal, updateAGoal, deleteAGoal } from '../../controllers/goal.controller'

const router = Router()

router
    .get('/', getAllGoals)
    .post('/', createAGoal)
    .put('/:goalId', updateAGoal)
    .delete('/:goalId', deleteAGoal)

export default router
