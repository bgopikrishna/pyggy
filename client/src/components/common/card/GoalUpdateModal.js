import React from 'react';
import Modal from '../modal/Modal';
import { useState } from 'react';

export function GoalUpdateModal({ goal, visibility, toggleVisibilty }) {
    console.log('Visibility', visibility);
    const { saved } = goal;
    const [addAmount, setAddAmount, target] = useState(0);

    return (
        <Modal open={visibility} closeModal={toggleVisibilty}>
            <div className="is-full-width field has-background-white">
                <p>Saved: {saved}</p>
                <input
                    type="number"
                    name="add"
                    id="add"
                    value={addAmount}
                    onChange={(e) => setAddAmount(e.target.value)}
                    placeholder="Enter the amount to add"
                    max={target}
                />
                <p>Your target: {target}</p>
            </div>
        </Modal>
    );
}
