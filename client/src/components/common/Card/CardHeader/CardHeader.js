import React from 'react';
import Dropdown from '../../Dropdown/Dropdown';
import { Link } from 'react-router-dom';

function CardHeader({ className = '', children, linkTo, header }) {
    const classNames = 'card-header ' + className;
    return (
        <header className={classNames}>
            {linkTo && (
                <Link
                    className="card-header-title is-link is-size-5"
                    to={linkTo}>
                    {header}
                </Link>
            )}
            {!linkTo && <p className="card-header-title is-size-5">{header}</p>}
            {children}
        </header>
    );
}

export default CardHeader;
