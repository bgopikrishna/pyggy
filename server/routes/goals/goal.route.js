const { Router } = require('express');
const {
    getAllGoals,
    createAGoal,
    updateAGoal,
    deleteAGoal,
    updateGoalRecord
} = require('../../controllers/goal.controller');
const clearRedisCache = require('../../middlewares/clearCache.middleware');

const router = Router();

router
    .get('/', getAllGoals)
    .post('/', clearRedisCache, createAGoal)
    .put('/:goalId', clearRedisCache, updateAGoal)
    .put('/record/:goalId', clearRedisCache, updateGoalRecord)
    .delete('/:goalId', clearRedisCache, deleteAGoal);

module.exports = router;
