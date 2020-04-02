import React from 'react';

function Button({ children, type, className = '', onClick, loading = false }) {
    const btnClass = 'button ' + className + (loading ? ' is-loading ' : '');

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
