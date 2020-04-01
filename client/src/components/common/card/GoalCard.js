/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import './GoalCard.scss';
import { GoalCardContent } from './GoalCardContent';
import { GoalCardHeader } from './GoalCardHeader';

const GoalCard = ({ goal }) => {
    const { name, saved, target, color } = goal;

    return (
        <div className="goal_card card has-margin-10 has-background-white">
            {saved && (
                <progress
                    className={`progress is-small is-${color} is-marginless`}
                    value={saved}
                    max={target}>
                    {saved}
                </progress>
            )}

            <GoalCardHeader goal={goal} />

            <GoalCardContent goal={goal} />

            <footer className="card-footer">
                <a className="card-footer-item">Update Progress</a>
            </footer>
        </div>
    );
};

export default GoalCard;
