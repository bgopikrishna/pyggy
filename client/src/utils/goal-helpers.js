import * as apiHelper from './api-helper';

export const getGoals = () => {
    return apiHelper.getData('/api/goals').then((res) => res.data.goals);
};
