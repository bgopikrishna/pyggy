import React from 'react';

const DesktopVersion = () => {
    return (
        <article
            className="message is-warning is-hidden-mobile"
            style={{
                position: 'fixed',
                maxWidth: '220px',
                right: '0',
                top: '0'
            }}>
            <div className="message-header">
                <p>Note</p>
            </div>
            <div className="message-body has-text-left has-padding-10">
                Hi, currently this web app is optimized for mobiles.
                <br />
                <strong>Desktop version coming soon</strong>
            </div>
        </article>
    );
};

export default DesktopVersion;
