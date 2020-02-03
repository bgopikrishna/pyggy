import React from 'react'
import { Skeleton, Button } from 'antd'

const Home = () => {
    return (
        <div>
            <Skeleton active></Skeleton>
            <Skeleton active></Skeleton>

            <Skeleton active></Skeleton>

            <Skeleton active></Skeleton>

            <Skeleton active></Skeleton>

            <Button
                type="primary"
                shape="circle"
                icon="plus"
                className="btn-float"
                size={'large'}
            />
        </div>
    )
}

export default Home
