import React from 'react';

const FullScreenLoader = () => {
    return (
        <div
            style={{ position: 'fixed', height: '100vh', width: '100vw' }}
            className="is-flex justify-content-center align-items-center has-text-centered">
            <p>Loading</p>
            <progress
                style={{ maxWidth: '250px' }}
                className="progress is-large is-info"
                max="100">
                60%
            </progress>
        </div>
    );
};

export default FullScreenLoader;
