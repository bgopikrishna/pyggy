/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './GoalCard.scss';
import { GoalCardContent } from './GoalCardContent';
import { GoalCardHeader } from './GoalCardHeader';
import { GoalUpdateModal } from './GoalUpdateModal';
import { useState } from 'react';

const GoalCard = ({ goal, showAdvancedOptions = true }) => {
    const { saved, target, color, archived } = goal;

    const [updateDialogVisibility, setUpdateDialogVisibility] = useState(false);

   

    return (
        <div className="goal_card card has-margin-10 has-background-white">
            <GoalCardHeader
                goal={goal}
                handleDelete={() => console.log('Delete')}
                showMenu={showAdvancedOptions}
            />
            {!archived && (
                <progress
                    className={`progress is-small is-${color} is-marginless`}
                    value={saved}
                    max={target}>
                    {saved}
                </progress>
            )}

            <GoalCardContent goal={goal} />

            {showAdvancedOptions && (
                <footer className="card-footer">
                    <button
                        onClick={() => setUpdateDialogVisibility(true)}
                        className="card-footer-item">
                        Update Progress
                    </button>
                </footer>
            )}

            <GoalUpdateModal
                goal={goal}
                visibility={updateDialogVisibility}
                toggleVisibilty={() => setUpdateDialogVisibility(false)}
            />
        </div>
    );
};

export default GoalCard;
