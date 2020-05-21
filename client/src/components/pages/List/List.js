import React from 'react';
import { useGoals } from '../../../context/GoalsContext';
import Tabs from '../../common/Tabs/Tabs';
import { useState } from 'react';
import GoalsList from '../../GoalsList/GoalsList';

const TABS = [
    {
        id: 1,
        icon: 'assignment',
        name: 'Active'
    },
    {
        id: 2,
        icon: 'assignment_turned_in',
        name: 'Completed'
    },
    {
        id: 3,
        icon: 'assignment_returned',
        name: 'Archived'
    }
];

const List = () => {
    const { goals } = useGoals();
    const [activeTab, setActiveTab] = useState(1);

    const activeGoals = goals.filter(
        (goal) => goal.saved !== goal.target && !goal.archived
    );

    const completedGoals = goals.filter(
        (goal) => goal.saved === goal.target && !goal.archived
    );

    const archivedGoals = goals.filter((goal) => goal.archived);

    const handleTabs = (id) => {
        setActiveTab(id);
    };

    console.log(goals, activeGoals, completedGoals, archivedGoals);

    return (
        <section className="home">
            <Tabs
                items={TABS}
                changeTab={handleTabs}
                activeTabId={activeTab}></Tabs>
            {activeTab === 1 && <GoalsList goals={activeGoals} />}

            {activeTab === 2 && (
                <GoalsList goals={completedGoals} showMenu={false} />
            )}

            {activeTab === 3 && <GoalsList goals={archivedGoals} />}
        </section>
    );
};

export default List;
