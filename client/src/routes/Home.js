import React, { useEffect } from 'react'
import GoalCard from '../components/resuables/GoalCard/GoalCard'
import { getData } from '../utils/fetchMetods'

const Home = () => {
    async function getGoals(e) {
        const data = await getData('/api/goals')

        console.log(data)
    }

    useEffect(() => {
        getGoals()
    }, [])
    return (
        <div>
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
        </div>
    )
}

export default Home
