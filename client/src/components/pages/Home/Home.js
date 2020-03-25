import React from 'react';
import { useGoals } from '../../../context/GoalsContext';
import GoalCard from '../../common/card/GoalCard';
import Modal from '../../common/modal/Modal';

const Home = () => {
    const { goals } = useGoals();

    return (
        <section className="home">
            {goals.map((goal) => (
                <GoalCard key={goal._id} goal={goal}></GoalCard>
            ))}

            <Modal open={true}>
                <div className="modal-content is-active">
                    Any other Bulma elements you want
                </div>
            </Modal>
        </section>
    );
};

export default Home;
