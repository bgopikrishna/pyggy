import React from 'react';
import Modal from '../common/modal/Modal';
import { useState } from 'react';
import Input from '../common/input/Input';
import Button from '../common/Button/Button';
import { useAsync } from 'react-async';
import { useToast } from '../common/Toast';
import { useGoals } from '../../context/GoalsContext';
import { RECORD_TYPES } from '../../constants';

export function GoalUpdateModal({ goal, visibility, toggleVisibilty }) {
    const { addToast } = useToast();

    const { updateRecordOfAGoal } = useGoals();

    const { saved, target, name } = goal;
    const [amount, setAmount] = useState('');
    const [recordType, setRecordType] = useState(RECORD_TYPES.DEPOSIT);
    const [error, setError] = useState(null);

    const onSuccess = () => {
        addToast({ message: `Progress updated for ${name}`, type: 'info' });
        setError(null);
        toggleVisibilty();
    };

    const onError = (err) => {
        setError(err);
    };

    const { isLoading, run } = useAsync({
        deferFn: updateRecordOfAGoal,
        onResolve: onSuccess,
        onReject: onError
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Add');
        run({ amount, recordType }, goal._id);
    };

    return (
        <Modal open={visibility} closeModal={toggleVisibilty}>
            <form
                className="is-full-width field has-background-white has-padding-15"
                onSubmit={handleSubmit}>
                <div className="flex-column is-full-width">
                    <div className="flex-column has-margin-bottom-10">
                        <label
                            htmlFor="recordType"
                            className="label is-capitalized">
                            Choose Transaction Type
                        </label>
                        <div className="select is-primary">
                            <select
                                className=" is-full-width is-capitalized"
                                name="recordType"
                                id="recordType"
                                value={recordType}
                                onChange={(e) => setRecordType(e.target.value)}>
                                <option value={RECORD_TYPES.DEPOSIT}>
                                    {RECORD_TYPES.DEPOSIT}
                                </option>
                                <option value={RECORD_TYPES.WITHDRAW}>
                                    {RECORD_TYPES.WITHDRAW}
                                </option>
                            </select>
                        </div>
                    </div>
                    <Input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        label="Enter Amount"
                        required={true}
                        min={0}
                        max={
                            recordType === RECORD_TYPES.DEPOSIT
                                ? parseFloat(target) - parseFloat(saved)
                                : parseFloat(saved)
                        }
                    />
                </div>
                <Button
                    loading={isLoading}
                    type="submit"
                    className="button is-primary is-full-width box has-margin-top-10">
                    {recordType === RECORD_TYPES.DEPOSIT
                        ? 'Add Amount'
                        : 'Withdraw Amount'}
                </Button>
                {error && (
                    <p className="has-text-danger">Error updating progress</p>
                )}
            </form>
        </Modal>
    );
}
