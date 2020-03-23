import React, { Fragment } from 'react';
import apiClient from '../../../utils/api-helper';
import CreateGoalForm from '../../common/CreateGoalForm/CreateGoalForm';
import { useContext } from 'react';
import { GoalsContext } from '../../../context/GoalsContext';
import { useAsync } from 'react-async';

const CreateGoal = () => {
    const { createAGoal } = useContext(GoalsContext);
    const { error, isLoading, run } = useAsync({ deferFn: createAGoal });

    const handleSubmit = (goal) => {
        console.log('Goal obj in creat goal', goal);
        run(goal);
    };

    return (
        <Fragment>
            <CreateGoalForm
                handleSubmit={handleSubmit}
                error={''}
                isLoading={isLoading}
            />
            {error && (
                <div className="notification is-danger">
                    <button class="delete"></button>
                    {error.message}
                </div>
            )}
        </Fragment>
    );
};

export default CreateGoal;
