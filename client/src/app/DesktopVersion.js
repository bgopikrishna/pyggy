import React from 'react';

const DesktopVersion = () => {
    return (
        <article
            className="message is-warning is-hidden-mobile is-hidden-tablet-only"
            style={{
                position: 'fixed',
                maxWidth: '140px',
                right: '0',
                top: '0'
            }}>
            <div className="message-header">
                <p>Note</p>
            </div>
            <div className="message-body">
                Hi, currently this web app is optimized for mobiles.
                <strong>Desktop version coming soon</strong>
            </div>
        </article>
    );
};

export default DesktopVersion;
