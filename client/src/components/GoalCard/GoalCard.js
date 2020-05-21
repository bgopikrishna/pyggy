import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { differenceInDays } from 'date-fns';
import './GoalCard.scss';

import { GoalUpdateModal } from './GoalUpdateModal';
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../common/Card';
import Dropdown from '../common/Dropdown/Dropdown';
import DropdownItem from '../common/Dropdown/DropdownItem';
import Button from '../common/Button/Button';
import 'react-circular-progressbar/dist/styles.css';

const GoalCard = ({ goal, showMenu, deleteAGoal, updateAGoal }) => {
    const { saved, target, color, archived, name, id, labels, endDate } = goal;

    const [updateDialogVisibility, setUpdateDialogVisibility] = useState(false);

    const cardActions = ['edit', 'archive', 'delete'];

    const progress = Math.round((parseFloat(saved) / parseFloat(target)) * 100);

    const handleCardAction = (opt) => {};

    return (
        <div className="goal_card card has-margin-10 has-background-white is-full-width">
            <Card>
                <CardHeader
                    actions={cardActions}
                    header={name}
                    linkTo={`/info/${id}`}
                    onActionSelect={handleCardAction}>
                    <Dropdown>
                        <DropdownItem to={`/edit/${id}`} icon="edit">
                            Edit
                        </DropdownItem>
                        <DropdownItem onClick={() => {}} icon="archive">
                            Archive
                        </DropdownItem>
                        <DropdownItem
                            onClick={() => {}}
                            icon="delete"
                            className="has-text-danger">
                            Delete
                        </DropdownItem>
                    </Dropdown>
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
