import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { useGoals } from '../../../context/GoalsContext';

export const GoalCardHeader = ({ goal, handleDelete, showMenu }) => {
    const { name, archived } = goal;

    const { updateAGoal } = useGoals();

    const handleArchive = () => {
        updateAGoal([{ ...goal, archived: !archived }]);
    };

    return (
        <header className="card-header is-shadowless">
            <p className="card-header-title">{name}</p>
            {showMenu && (
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
                        <span className="is-size-6">
                            {!archived ? 'Archive' : 'Restore'}
                        </span>
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
            )}
        </header>
    );
};
