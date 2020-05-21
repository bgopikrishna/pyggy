import React from 'react';
import { Link } from 'react-router-dom';

function CardContent({ className = '', children, linkTo }) {
    const classNames = 'card-content ' + className;
    return (
        <div className={classNames}>
            {!linkTo && <div className="content">{children}</div>}
            {linkTo && (
                <Link to={linkTo} className="content has-text-dark">
                    {children}
                </Link>
            )}
        </div>
    );
}

export default CardContent;
