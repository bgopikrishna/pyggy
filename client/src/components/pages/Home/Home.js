import React from 'react';
import { useGoals } from '../../../context/GoalsContext';
import GoalCard from '../../common/card/GoalCard';
import Modal from '../../common/modal/Modal';

const Home = () => {
    const { goals } = useGoals();

    const activeGoals = goals.filter(
        (goal) => goal.saved !== goal.target && !goal.archived
    );

    return (
        <section className="home">
            <header>
                <h2 className="title is-4 has-text-center has-text-primary">
                    Active Goals
                </h2>
            </header>
            {activeGoals.map((goal) => (
                <GoalCard key={goal._id} goal={goal}></GoalCard>
            ))}
        </section>
    );
};

export default Home;
