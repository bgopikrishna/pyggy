import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

export const GoalCardHeader = ({ goal, handleArchive, handleDelete }) => {
    const { name } = goal;
    return (
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
                <button
                    onClick={handleArchive}
                    className="is-white dropdown-item is-flex align-items-center">
                    <span className="material-icons icon is-small has-margin-right-15 mdi mdi-dark">
                        archive
                    </span>
                    <span className="is-size-6">Archive</span>
                </button>
                <button
                    onClick={handleDelete}
                    className="is-white dropdown-item is-flex has-text-danger align-items-center">
                    <span className="material-icons icon is-small has-margin-right-15 mdi mdi-dark">
                        delete
                    </span>
                    <span className="is-size-6">Delete</span>
                </button>
            </Dropdown>
        </header>
    );
};
