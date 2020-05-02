import * as apiHelper from './api-helper';

const getGoals = () => {
    return apiHelper.getData('/api/goals').then((res) => res.data.goals);
};

const doCreateGoal = (goal) => {
    return apiHelper.postData('/api/goals', goal).then((res) => res.data.goal);
};

const doUpdateGoal = (goal) => {
    return apiHelper
        .putData(`/api/goals/${goal._id}`, goal)
        .then((res) => res.data.goal);
};

const doDeleteGoal = (goal) => {
    return apiHelper
        .deleteData(`/api/goals/${goal._id}`)
        .then((res) => res.data.goal);
};

const doAddRecordForGoal = (record, goalId) => {
    return apiHelper
        .putData(`/api/goals/record/${goalId}`, record)
        .then((res) => res.data.goal);
};

export {
    getGoals,
    doCreateGoal,
    doUpdateGoal,
    doDeleteGoal,
    doAddRecordForGoal
};
