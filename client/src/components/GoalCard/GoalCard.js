import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { differenceInDays } from 'date-fns';
import { GoalUpdateModal } from './GoalUpdateModal';
import { Card, CardContent, CardFooter, CardHeader } from '../common/Card';
import Dropdown from '../common/Dropdown/Dropdown';
import DropdownItem from '../common/Dropdown/DropdownItem';
import Button from '../common/Button/Button';
import 'react-circular-progressbar/dist/styles.css';
import { useGoals } from '../../context/GoalsContext';
import { useToast } from '../common/Toast';
import './GoalCard.scss';

const GoalCard = ({ goal, showMenu }) => {
    const { saved, target, color, archived, name, id, labels, endDate } = goal;

    const [updateDialogVisibility, setUpdateDialogVisibility] = useState(false);
    const { updateAGoal, deleteAGoal } = useGoals();

    const { addToast } = useToast();

    const progress = Math.round((parseFloat(saved) / parseFloat(target)) * 100);

    const handleCardAction = (opt) => {
        if (opt === 'delete') return handleDelete();

        if (opt === 'archive') return handleArchive();
    };

    const handleArchive = async () => {
        const message = `Are you sure you want to ${
            archived ? 'restore' : 'archive'
        } this?`;

        const answer = window.confirm(message);

        if (answer) {
            try {
                await updateAGoal([{ ...goal, archived: !archived }]);
                addToast({
                    message: `Goal ${goal.name} ${
                        archived ? 'restored' : 'archived'
                    }`,
                    type: 'info'
                });
            } catch (error) {
                addToast({
                    message: `Error updating ${goal.name}`,
                    type: 'danger'
                });
            }
        }
    };

    const handleDelete = async () => {
        const message = `Are you sure you want to permanently delete this?`;

        const answer = window.confirm(message);

        if (answer) {
            try {
                await deleteAGoal([goal]);
                addToast({
                    message: `Goal ${goal.name} deleted successfully`,
                    type: 'info'
                });
            } catch (error) {
                addToast({
                    message: `Error deleting ${goal.name}`,
                    type: 'info'
                });
            }
        }
    };

    return (
        <div className="goal_card card has-margin-10 has-background-white is-full-width">
            <Card>
                <CardHeader
                    header={name}
                    linkTo={`/info/${id}`}
                    onActionSelect={handleCardAction}>
                    {showMenu && (
                        <Dropdown>
                            <DropdownItem to={`/edit/${id}`} icon="edit">
                                Edit
                            </DropdownItem>
                            <DropdownItem
                                onClick={() => {
                                    handleCardAction('archive');
                                }}
                                icon={!archived ? 'archive' : 'unarchive'}>
                                {!archived ? 'Archive' : 'Restore'}
                            </DropdownItem>
                            <DropdownItem
                                onClick={() => {
                                    handleCardAction('delete');
                                }}
                                icon="delete"
                                className="has-text-danger">
                                Delete
                            </DropdownItem>
                        </Dropdown>
                    )}
                </CardHeader>

                <CardContent linkTo={`/info/${id}`}>
                    <div className="is-flex align-items-center is-size-7-mobile">
                        <div
                            className="has-margin-right-20"
                            style={{ height: '80px', width: '80px' }}>
                            <CircularProgressbar
                                value={progress}
                                text={`${progress}%`}
                                styles={buildStyles({
                                    textColor: `var(--${color})`,
                                    pathColor: `var(--${color})`
                                })}
                            />
                        </div>
                        <div className="goal_card__info">
                            <div className="goal_card__info__item is-flex align-items-center has-margin-10">
                                <span className="icon material-icons has-margin-right-15">
                                    account_balance_wallet
                                </span>
                                <span>
                                    Saved ${saved} of ${target}
                                </span>
                            </div>
                            {endDate && (
                                <div className="goal_card__info__item is-flex align-items-center has-margin-10">
                                    <span className="icon material-icons has-margin-right-15">
                                        event
                                    </span>

                                    <span>
                                        {differenceInDays(
                                            new Date(endDate),
                                            Date.now()
                                        )}{' '}
                                        days to go
                                    </span>
                                </div>
                            )}

                            <div className="tags">
                                {labels.map((item) => (
                                    <span key={item} className="tag">
                                        <span className="is-small material-icons">
                                            label
                                        </span>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button
                        className="w-100 is-outlined"
                        onClick={() => setUpdateDialogVisibility(true)}>
                        Update Progress
                    </Button>
                </CardFooter>
            </Card>

            <GoalUpdateModal
                goal={goal}
                visibility={updateDialogVisibility}
                toggleVisibilty={() => setUpdateDialogVisibility(false)}
            />
        </div>
    );
};

export default GoalCard;
