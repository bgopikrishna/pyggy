import React from 'react';
import { func } from 'prop-types';

function Card({ className = '', children }) {
    const classNames =
        'card flex-column justify-content-between h-100' + className;
    return <div className={classNames}>{children}</div>;
}

export default Card;
