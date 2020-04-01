import React from 'react';
import { useGoals } from '../../../context/GoalsContext';
import GoalCard from '../../common/card/GoalCard';
import Modal from '../../common/modal/Modal';

const Home = () => {
    const { goals } = useGoals();

    return (
        <section className="home">
            <header>
                <h2 className="title">Active Goals</h2>
            </header>
            {goals.map((goal) => (
                <GoalCard key={goal._id} goal={goal}></GoalCard>
            ))}
        </section>
    );
};

export default Home;
