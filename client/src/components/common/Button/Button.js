import React from 'react';

function Button({
    children,
    type,
    className = '',
    onClick,
    loading = false,
    icon
}) {
    const btnClass = 'button ' + className + (loading ? ' is-loading ' : '');

    if (icon) {
        return (
            <button onClick={onClick} className={btnClass}>
                <span className="material-icons icon is-small has-margin-right-15 mdi mdi-dark">
                    {icon}
                </span>
                <span className="is-size-6">{children}</span>
            </button>
        );
    }

    return (
        <button
            type={type}
            className={btnClass}
            onClick={onClick ? onClick : null}>
            {children}
        </button>
    );
}

export default Button;
