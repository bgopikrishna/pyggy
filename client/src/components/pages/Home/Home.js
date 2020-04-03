import React from 'react';
import { useGoals } from '../../../context/GoalsContext';
import GoalCard from '../../common/card/GoalCard';
import Modal from '../../common/modal/Modal';
import GoalsList from '../../common/GoalsList/GoalsList';

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
        </section>
    );
};

export default Home;
