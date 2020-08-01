import React from 'react';
import { differenceInDays } from 'date-fns';
import { useGoals } from '../../../context/GoalsContext';
import { useParams, useHistory } from 'react-router-dom';
import { formatRelative } from 'date-fns';
import { RECORD_TYPES } from '../../../constants';
import FullScreenLoader from '../../common/FullScreenLoader/FullScreenLoader';
import Emoji from '../../common/Emoji/Emoji';

function GoalDetails() {
    const { goals } = useGoals();
    const { id } = useParams();
    const history = useHistory();

    const goal = goals.find((g) => g._id === id);

    if (!goal) {
        return <FullScreenLoader />;
    }

    const {
        name,
        description,
        records = [],
        saved,
        target,
        labels,
        endDate
    } = goal;

    const daystogo = differenceInDays(new Date(endDate), new Date());
    const needToSavePerDay = Math.round((target - saved) / daystogo);

    const sortedRecords = records.reverse();

    const handleBack = () => {
        history.goBack();
    };

    return (
        <div className="container">
            <div className="create_goal_header is-flex justify-between has-padding-10 has-background-white top-0 is-full-width has-text-primary">
                <span
                    className="material-icons is-hidden-desktop"
                    role="button"
                    onClick={handleBack}>
                    arrow_back
                </span>{' '}
                <h3 className="has-margin-auto has-text-primary title is-5">
                    Goal Details
                </h3>
            </div>
            <div className="content has-padding-20 has-margin-top-25 has-margin-bottom-25">
                <h3 className="title is-3">{name}</h3>
                <p>{description}</p>
                <p className="tags">
                    {labels.map((label) => (
                        <span key={label} className="tag">
                            {label}
                        </span>
                    ))}
                </p>
                <h4 className="title is-4">Info</h4>
                <ul>
                    <li>
                        <Emoji label="Money bag" emoji="💰" /> Saved{' '}
                        <strong> ${saved}</strong> of ${target}
                    </li>
                    <li>
                        <Emoji label="days to go" emoji="📅" />{' '}
                        <strong>{daystogo}</strong> Days Remaining
                    </li>
                    <li>
                        <Emoji label="target" emoji="🎯" /> Need to save average{' '}
                        <strong>${needToSavePerDay}</strong> per day to
                        accomplish the goal
                    </li>
                </ul>
                <h3 className="title is-4">Transactions Record</h3>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Transaction Type</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!sortedRecords.length && (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="has-text-centered has-text-weight-bold	">
                                    {' '}
                                    No Records Found
                                    <Emoji label="Shrug" emoji="🤷‍♀️" />
                                </td>
                            </tr>
                        )}

                        {sortedRecords.map((rec, index) => (
                            <tr
                                key={index}
                                className={
                                    RECORD_TYPES.DEPOSIT === rec.recordType
                                        ? 'has-text-success is-capitalized'
                                        : 'has-text-danger is-capitalized'
                                }>
                                <td className="is-capitalized">
                                    {rec.recordType}
                                </td>
                                <td>
                                    {formatRelative(
                                        new Date(rec.time),
                                        Date.now()
                                    )}
                                </td>
                                <td>
                                    {rec.recordType === RECORD_TYPES.DEPOSIT
                                        ? '+'
                                        : '-'}
                                    $
                                    {rec.recordType === RECORD_TYPES.DEPOSIT
                                        ? rec.amount
                                        : 0 - parseInt(rec.amount)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GoalDetails;
