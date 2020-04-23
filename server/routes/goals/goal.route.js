const { Router } = require('express');
const {
    getAllGoals,
    createAGoal,
    updateAGoal,
    deleteAGoal
} = require('../../controllers/goal.controller');

const router = Router();

router
    .get('/', getAllGoals)
    .post('/', createAGoal)
    .put('/:goalId', updateAGoal)
    .delete('/:goalId', deleteAGoal);

module.exports = router;
