import React from 'react';

function CardFooter({ className = '', children }) {
    const classNames = 'card-footer is-flex' + className;
    return <footer className={classNames}>{children}</footer>;
}

export default CardFooter;
