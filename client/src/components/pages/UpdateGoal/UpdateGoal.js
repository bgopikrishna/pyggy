import React, { Fragment, useEffect } from 'react';
import { useGoals } from '../../../context/GoalsContext';
import { useParams, useHistory } from 'react-router-dom';
import CreateGoalForm from '../../common/CreateGoalForm/CreateGoalForm';
import { useAsync } from 'react-async';
import { useToast } from '../../common/Toast';

const UpdateGoal = () => {
    const { goals, updateAGoal } = useGoals();
    const { id } = useParams();
    const history = useHistory();
    const { addToast } = useToast();

    const goal = goals.find((goal) => id === goal._id);
    let timer;

    const redirectToHome = () => {
        addToast({ message: 'Goal updated', type: 'info' });

        timer = setTimeout(() => {
            history.push('/');
        }, 3000);
    };

    const handleError = () => {
        addToast({ message: 'Error updating the goal', type: 'danger' });
    };

    const { isLoading, run } = useAsync({
        deferFn: updateAGoal,
        onResolve: redirectToHome,
        onReject: handleError
    });

    useEffect(() => {
        return () => clearTimeout(timer);
    }, [timer]);

    const handleSubmit = (goal) => {
        console.log('Goal obj in creat goal', goal);
        run(goal);
    };

    return (
        <Fragment>
            <CreateGoalForm
                handleSubmit={handleSubmit}
                goal={goal}
                isLoading={isLoading}
                mode="update"
            />
            {/* {error && (
                <div className={`notification is-danger`}>{error.message}</div>
            )} */}
        </Fragment>
    );
};

export default UpdateGoal;
