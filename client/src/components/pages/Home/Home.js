import React from 'react';
import { useGoals } from '../../../context/GoalsContext';
import GoalCard from '../../common/card/GoalCard';
import Modal from '../../common/modal/Modal';
import GoalsList from '../../common/GoalsList/GoalsList';
import { Link } from 'react-router-dom';

const Home = () => {
    const { goals } = useGoals();

    // const activeGoals = goals.filter(
    //     (goal) => goal.saved !== goal.target && !goal.archived
    // );
    const activeGoals = [];

    return (
        <section className="home">
            <header className="is-flex justify-center">
                <h2 className="title is-4 has-text-center has-text-primary">
                    Active Goals
                </h2>
            </header>
            {!!activeGoals.length && <GoalsList goals={activeGoals} />}
            {!activeGoals.length && (
                <p className="has-text-centered has-margin-top-75 is-full-width">
                    There are no active goals,{' '}
                    <Link to="/create">Create a goal</Link>
                </p>
            )}

            <Link
                to="/create"
                className="button is-rounded is-hidden-mobile is-primary is-flex align-items-center box position-fixed"
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
