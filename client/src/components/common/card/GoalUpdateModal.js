import React from 'react';
import Modal from '../modal/Modal';
import { useState } from 'react';
import Input from '../input/Input';
import Button from '../Button/Button';
import { useAsync } from 'react-async';
import { useToast } from '../Toast';
import { useGoals } from '../../../context/GoalsContext';

export function GoalUpdateModal({ goal, visibility, toggleVisibilty }) {
    const { addToast } = useToast();

    const { updateAGoal } = useGoals();

    const { saved, target, name } = goal;
    const [addAmount, setAddAmount] = useState('');

    const onSuccess = () => {
        addToast({ message: `Progress updated for ${name}`, type: 'info' });
        toggleVisibilty();
    };

    const { isLoading, run, error } = useAsync({
        deferFn: updateAGoal,
        onResolve: onSuccess
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAmount = parseFloat(saved) + parseFloat(addAmount);
        const updatedGoal = { ...goal, saved: updatedAmount };
        run(updatedGoal);
    };

    return (
        <Modal open={visibility} closeModal={toggleVisibilty}>
            <form
                className="is-full-width field has-background-white has-padding-15"
                onSubmit={handleSubmit}>
                <Input
                    value={addAmount}
                    onChange={(e) => setAddAmount(e.target.value)}
                    type="number"
                    label="Add an amount of"
                    placeholder="Add an amount of"
                    required={true}
                    min={0}
                    max={parseFloat(target) - parseFloat(saved)}
                />
                <Button
                    loading={isLoading}
                    type="submit"
                    className="button is-primary is-full-width box">
                    Add Amount
                </Button>
                {error && (
                    <p className="has-text-danger">Error updating progress</p>
                )}
            </form>
        </Modal>
    );
}
