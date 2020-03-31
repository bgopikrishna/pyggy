/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './GoalCard.scss';

const GoalCard = ({ goal }) => {
    const { name, saved, target, color } = goal;

    return (
        <div className="goal_card card has-margin-10 has-background-white">
            <header className="card-header is-shadowless">
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

            {saved && (
                <progress
                    className={`progress is-small is-radiusless is-${color} is-marginless`}
                    value={saved}
                    max={target}>
                    {saved}
                </progress>
            )}

            <div className="card-content is-flex justify-space-around has-padding-top-5 has-padding-bottom-5">
                <p>Saved: ${saved}</p>
                <p className="content">
                    Progress:{' '}
                    {Math.round((parseFloat(saved) / parseFloat(target)) * 100)}
                    %
                </p>
            </div>

            <footer className="card-footer">
                <a className="card-footer-item">Update Progress</a>
            </footer>
        </div>
    );
};

export default GoalCard;
