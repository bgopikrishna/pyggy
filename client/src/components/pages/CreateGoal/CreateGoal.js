import React, { Fragment, useEffect } from 'react';
import CreateGoalForm from '../../common/CreateGoalForm/CreateGoalForm';
import { useContext } from 'react';
import { GoalsContext, useGoals } from '../../../context/GoalsContext';
import { useAsync } from 'react-async';
import { useToast } from '../../common/Toast';

const CreateGoal = () => {
    const { addToast } = useToast();

    const { createAGoal } = useGoals();
    const { isLoading, run, error } = useAsync({
        deferFn: createAGoal
    });

    const handleSubmit = (goal) => {
        console.log('Goal obj in creat goal', goal);
        run(goal);
    };

    // useEffect(() => {
    //     console.log(`isRejected ${isRejected}`);
    //     if (isRejected) {
    //         console.log('Creating toast');
    //         addToast({ message: 'Error', type: 'danger' });
    //     }
    // }, [addToast, isRejected]);

    return (
        <Fragment>
            <CreateGoalForm handleSubmit={handleSubmit} isLoading={isLoading} />
            {/* {error && (
                <div className={`notification is-danger`}>{error.message}</div>
            )} */}
        </Fragment>
    );
};

export default CreateGoal;
