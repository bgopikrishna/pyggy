import React from 'react';
import { useGoals } from '../../../context/GoalsContext';
import GoalCard from '../../common/card/GoalCard';
import Modal from '../../common/modal/Modal';
import GoalsList from '../../common/GoalsList/GoalsList';
import { Link } from 'react-router-dom';

const Home = () => {
    const { goals } = useGoals();

    const activeGoals = goals.filter(
        (goal) => goal.saved !== goal.target && !goal.archived
    );

    return (
        <section className="home">
            <header className="is-flex justify-center">
                <h2 className="title is-4 has-text-center has-text-primary">
                    Active Goals
                </h2>
            </header>
            <GoalsList goals={activeGoals} />

            <Link
                to="/create"
                className="button is-rounded is-primary is-flex align-items-center box position-fixed"
                style={{ right: '1.5rem', bottom: '2.5rem' }}>
                <span className="icon">
                    <span className="material-icons">add</span>{' '}
                </span>
                <span>Create Goal</span>
            </Link>
        </section>
    );
};

export default Home;
