import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../common/Dropdown/Dropdown';
import { useGoals } from '../../context/GoalsContext';
import { useToast } from '../common/Toast';

export const GoalCardHeader = ({ goal, showMenu }) => {
    const { addToast } = useToast();

    const { name, archived } = goal;

    const { updateAGoal, deleteAGoal } = useGoals();

    const handleArchive = () => {
        const message = `Are you sure you want to ${
            archived ? 'restore' : 'archive'
            } this?`;

        const answer = window.confirm(message);

        if (answer) {
            updateAGoal([{ ...goal, archived: !archived }]).then(() =>
                addToast({
                    message: `Goal ${goal.name} ${
                        archived ? 'restored' : 'archived'
                        }`,
                    type: 'info'
                })
            );
        }
    };

    const handleDelete = () => {
        const message = `Are you sure you want to permanently delete this?`;

        const answer = window.confirm(message);

        if (answer) {
            deleteAGoal([goal])
                .then(() =>
                    addToast({
                        message: `Goal ${goal.name} deleted successfully`,
                        type: 'info'
                    })
                )
                .catch((err) =>
                    addToast({
                        message: 'Error deleting the goal',
                        type: 'danger',
                        err
                    })
                );
        }
    };

    return (
        <header className="card-header is-shadowless">
            <h3 className="card-header-title">
                <Link to={`info/${goal._id}`}>{name}</Link>
            </h3>
            {showMenu && (
                <Dropdown>
                    {!archived && (
                        <Link
                            to={`/edit/${goal._id}`}
                            className="dropdown-item is-flex align-items-center">
                            <span className="material-icons icon is-small has-margin-right-15 mdi mdi-dark">
                                edit
                            </span>
                            <span className="is-size-6">Edit</span>
                        </Link>
                    )}
                    <button
                        onClick={handleArchive}
                        className="is-white dropdown-item is-flex align-items-center">
                        <span className="material-icons icon is-small has-margin-right-15 mdi mdi-dark">
                            {!archived ? 'archive' : 'unarchive'}
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
