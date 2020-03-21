/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const GoalCard = ({ goal }) => {
    const { name, saved, target } = goal;

    return (
        <div class="card has-margin-10">
            <header class="card-header">
                <p class="card-header-title">{name}</p>
                <a href="#" class="card-header-icon" aria-label="more options">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>Saved: {saved}</p>
                    <p>Target: {target}</p>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">
                    Update
                </a>
                <a href="#" class="card-footer-item">
                    Edit
                </a>
            </footer>
        </div>
    );
};

export default GoalCard;
