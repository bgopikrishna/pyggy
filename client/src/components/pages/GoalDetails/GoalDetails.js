import React from 'react';
import { useGoals } from '../../../context/GoalsContext';
import { useParams } from 'react-router-dom';

function GoalDetails() {
    const { goals } = useGoals();
    const { id } = useParams();

    const goal = goals.find((g) => g._id === id);

    const { name, favourite, description } = goal;

    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
                <strong>Favourite: </strong> {favourite ? 'YES' : 'NO'}
            </p>
        </div>
    );
}

export default GoalDetails;
