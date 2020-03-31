/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './GoalCard.scss';

const GoalCard = ({ goal }) => {
    const { name, saved, target, color } = goal;

    return (
        <div className="goal_card card has-margin-10">
            <header className="card-header">
                <p className="card-header-title">{name}</p>
                <Dropdown>
                    <Link
                        to={`/edit/${goal._id}`}
                        className="dropdown-item is-flex align-items-center">
                        <span className="material-icons icon is-small has-margin-right-15 mdi mdi-dark">
                            edit
                        </span>
                        <span className="is-size-6">Edit</span>
                    </Link>
                    <a
                        role="button"
                        className="dropdown-item is-flex align-items-center">
                        <span className="material-icons icon is-small has-margin-right-15 mdi mdi-dark">
                            archive
                        </span>
                        <span className="is-size-6">Archive</span>
                    </a>
                    <a
                        role="button"
                        className="dropdown-item is-flex has-text-danger align-items-center">
                        <span className="material-icons icon is-small has-margin-right-15 mdi mdi-dark">
                            delete
                        </span>
                        <span className="is-size-6">Delete</span>
                    </a>
                </Dropdown>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>Saved: {saved}</p>
                    <p>Target: {target}</p>
                </div>
            </div>
            <footer className="card-footer">
                <a className="card-footer-item">Update Progress</a>
            </footer>

            <progress
                class={`progress is-small is-radiusless is-${color}`}
                value={saved}
                max={target}>
                {saved}
            </progress>
        </div>
    );
};

export default GoalCard;
