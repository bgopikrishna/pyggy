const { Router } = require('express');
const {
    getAllGoals,
    createAGoal,
    updateAGoal,
    deleteAGoal
} = require('../../controllers/goal.controller');
const clearRedisCache = require('../../middlewares/clearRedisCache');

const router = Router();

router
    .get('/', getAllGoals)
    .post('/', clearRedisCache, createAGoal)
    .put('/:goalId', clearRedisCache, updateAGoal)
    .delete('/:goalId', clearRedisCache, deleteAGoal);

module.exports = router;
