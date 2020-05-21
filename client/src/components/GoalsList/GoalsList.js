import React from 'react';
import GoalCard from '../GoalCard/GoalCard';
import './GoalsList.scss';

const GoalsList = ({ goals, showMenu = true }) => {
    return (
        <div className="grid">
            {goals.map((goal) => (
                <GoalCard key={goal._id} goal={goal} showMenu={showMenu} />
            ))}

            {goals.length === 0 && (
                <p className="is subtitle is-size-1">
                    List empty{' '}
                    <span role="img" aria-label="dont know">
                        🤷
                    </span>
                </p>
            )}
        </div>
    );
};

export default GoalsList;
