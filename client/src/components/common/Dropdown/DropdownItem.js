import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function DropdownItem({ children, icon, onClick, className = '', to }) {
    const classNames =
        'dropdown-item button is-flex align-items-center justify-start ' +
        className;

    if (to && icon) {
        return (
            <Link to={to} className={classNames}>
                <span className="material-icons icon is-small has-margin-right-15 mdi mdi-dark">
                    {icon}
                </span>
                <span className="is-size-6">{children}</span>
            </Link>
        );
    }

    if (to) {
        return (
            <Link to={to} className={classNames}>
                {children}
            </Link>
        );
    }

    return (
        <Button icon={icon} onClick={onClick} className={classNames}>
            {children}
        </Button>
    );
}

export default DropdownItem;
