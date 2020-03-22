/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const GoalCard = ({ goal }) => {
    const { name, saved, target } = goal;

    return (
        <div className="card has-margin-10">
            <header className="card-header">
                <p className="card-header-title">{name}</p>
                <a
                    href="#"
                    className="card-header-icon"
                    aria-label="more options">
                    <span className="icon">
                        <span className="material-icons">expand_more</span>{' '}
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>Saved: {saved}</p>
                    <p>Target: {target}</p>
                </div>
            </div>
            <footer className="card-footer">
                <a href="#" className="card-footer-item">
                    Update
                </a>
                <a href="#" className="card-footer-item">
                    Edit
                </a>
            </footer>
        </div>
    );
};

export default GoalCard;
