import React, { Fragment } from 'react';
import { useGoals } from '../../../context/GoalsContext';
import { useParams } from 'react-router-dom';
import CreateGoalForm from '../../common/CreateGoalForm/CreateGoalForm';
import { useAsync } from 'react-async';

const UpdateGoal = () => {
    const { goals } = useGoals();

    const { id } = useParams();

    const goal = goals.find((goal) => id === goal._id);

    const { updateAGoal } = useGoals();
    const { isLoading, run, error } = useAsync({
        deferFn: updateAGoal
    });

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
