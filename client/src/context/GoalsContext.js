import { createContext, useReducer, useEffect, useCallback } from 'react';
import React from 'react';
import { getGoals } from '../utils/goal-helpers';
import useThunkReducer from '../hooks/useThunkReducer';

export const GoalsContext = createContext();

const reducer = (state, action) => {
    if (action.type === 'SET_ALL_GOALS') {
        return action.payload.goals;
    }

    if (action.type === 'UPDATE_A_GOAL') {
        const updatedGoal = action.payload.goal;

        const newGoals = state.map((goal) => {
            if (goal._id === updatedGoal._id) {
                goal = updatedGoal;
            }
            return goal;
        });

        return newGoals;
    }

    if (action.type === 'DELETE_A_GOAL') {
        const deletedGoal = action.payload.goal;

        const newGoals = state.filter((goal) => deletedGoal._id === goal._id);

        return newGoals;
    }

    return state;
};

const GoalsProvider = (props) => {
    const [goals, dispatch] = useThunkReducer(reducer, []);

    const getAllGoals = useCallback(
        () =>
            getGoals().then((goals) =>
                dispatch({ type: 'SET_ALL_GOALS', payload: { goals } })
            ),
        [dispatch]
    );

    useEffect(() => {
        getAllGoals();
    }, [getAllGoals]);

    return <GoalsContext.Provider value={{ goals }} {...props} />;
};

export default GoalsProvider;
