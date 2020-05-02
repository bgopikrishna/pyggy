import React from 'react';
import { useGoals } from '../../../context/GoalsContext';
import { useParams } from 'react-router-dom';
import { formatRelative } from 'date-fns';
import { RECORD_TYPES } from '../../../constants';
import FullScreenLoader from '../../common/FullScreenLoader/FullScreenLoader';

function GoalDetails() {
    const { goals } = useGoals();
    const { id } = useParams();

    const goal = goals.find((g) => g._id === id);

    if (!goal) {
        return <FullScreenLoader />;
    }

    const { name, favourite, description, records = [] } = goal;

    records.reverse();

    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
                <strong>Favourite: </strong> {favourite ? 'YES' : 'NO'}
            </p>

            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((rec) => (
                        <tr
                            className={
                                RECORD_TYPES.DEPOSIT === rec.recordType
                                    ? 'has-text-success'
                                    : 'has-text-danger'
                            }>
                            <td>
                                {formatRelative(new Date(rec.time), Date.now())}
                            </td>
                            <td>
                                {rec.recordType === RECORD_TYPES.DEPOSIT
                                    ? rec.amount
                                    : 0 - parseInt(rec.amount)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GoalDetails;
