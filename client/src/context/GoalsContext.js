import {
    createContext,
    useReducer,
    useEffect,
    useCallback,
    useContext
} from 'react';
import React from 'react';
import {
    getGoals,
    doCreateGoal,
    doUpdateGoal,
    doDeleteGoal,
    doAddRecordForGoal
} from '../utils/goal-helpers';
import useThunkReducer from '../hooks/useThunkReducer';

const SET_ALL_GOALS = 'SET_ALL_GOALS';
const ADD_A_GOAL = 'ADD_A_GOAL';
const UPDATE_A_GOAL = 'UPDATE_A_GOAL';
const DELETE_A_GOAL = 'DELETE_A_GOAL';

const GoalsContext = createContext();

const reducer = (state, action) => {
    if (action.type === SET_ALL_GOALS) {
        return action.payload.goals;
    }

    if (action.type === ADD_A_GOAL) {
        return [...state, action.payload.goal];
    }

    if (action.type === UPDATE_A_GOAL) {
        const updatedGoal = action.payload.goal;

        const newGoals = state.map((goal) => {
            if (goal._id === updatedGoal._id) {
                return updatedGoal;
            }
            return goal;
        });

        return newGoals;
    }

    if (action.type === DELETE_A_GOAL) {
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
                dispatch({ type: SET_ALL_GOALS, payload: { goals } })
            ),
        [dispatch]
    );

    const createAGoal = ([goalData]) =>
        doCreateGoal(goalData).then((goal) =>
            dispatch({ type: ADD_A_GOAL, payload: { goal } })
        );

    const updateAGoal = ([goalData]) =>
        doUpdateGoal(goalData).then((goal) =>
            dispatch({ type: UPDATE_A_GOAL, payload: { goal } })
        );

    const deleteAGoal = ([goalData]) =>
        doDeleteGoal(goalData).then((goal) =>
            dispatch({ type: DELETE_A_GOAL, payload: { goal } })
        );

    const updateRecordOfAGoal = ([record, goalId]) =>
        doAddRecordForGoal(record, goalId).then((goal) =>
            dispatch({ type: UPDATE_A_GOAL, payload: { goal } })
        );

    useEffect(() => {
        getAllGoals();
    }, [getAllGoals]);

    return (
        <GoalsContext.Provider
            value={{
                goals,
                createAGoal,
                getAllGoals,
                updateAGoal,
                updateRecordOfAGoal,
                deleteAGoal
            }}
            {...props}
        />
    );
};

export default GoalsProvider;

const useGoals = () => {
    const context = useContext(GoalsContext);

    if (!context) {
        throw new Error('useGoals mustbe used within GoalsProvider');
    }

    return context;
};

export { GoalsProvider, useGoals };
