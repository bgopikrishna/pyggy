import { Router } from 'express';
import {
    getAllGoals,
    createAGoal,
    updateAGoal,
    deleteAGoal
} from '../../controllers/goal.controller';
import clearRedisCache from '../../middlewares/clearRedisCache';

const router = Router();

router
    .get('/', getAllGoals)
    .post('/', clearRedisCache, createAGoal)
    .put('/:goalId', clearRedisCache, updateAGoal)
    .delete('/:goalId', clearRedisCache, deleteAGoal);

export default router;
