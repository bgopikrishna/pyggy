const { Router } = require('express');
const {
    getAllGoals,
    createAGoal,
    updateAGoal,
    deleteAGoal,
    updateGoalRecord
} = require('../../controllers/goal.controller');
// const clearCache = require('../../middlewares/clearCache.middleware');

const router = Router();

router
    .get('/', getAllGoals)
    .post('/', createAGoal)
    .put('/:goalId', updateAGoal)
    .put('/record/:goalId', updateGoalRecord)
    .delete('/:goalId', deleteAGoal);

module.exports = router;
