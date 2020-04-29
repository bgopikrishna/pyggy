import React, { Fragment, useEffect } from 'react';
import CreateGoalForm from '../../common/CreateGoalForm/CreateGoalForm';
import { useGoals } from '../../../context/GoalsContext';
import { useAsync } from 'react-async';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../common/Toast';

const CreateGoal = () => {
    const history = useHistory();
    const { addToast } = useToast();

    const redirectToHome = () => {
        addToast({ message: 'Goal created', type: 'success' });
        history.push('/');
    };

    const handleError = () => {
        addToast({ message: 'Error creating the goal', type: 'danger' });
    };

    const { createAGoal } = useGoals();
    const { isLoading, run } = useAsync({
        deferFn: createAGoal,
        onResolve: redirectToHome,
        onReject: handleError
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
