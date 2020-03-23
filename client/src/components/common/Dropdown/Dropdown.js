import React from 'react';
import { useState } from 'react';
import './Dropdown.scss';

const Dropdown = ({ label, items, value = '', onChange, className = '' }) => {
    const [activeItem, setActiveItem] = useState(value);
    const [dropdownState, setDropdownState] = useState(false);

    const onSelect = (item) => {
        setDropdownState(false);
        setActiveItem(item);
        onChange(item);
    };

    const toggleDropdown = () => {
        setDropdownState(!dropdownState);
    };

    return (
        <div
            className={`dropdown ${className} ${
                dropdownState ? 'is-active' : ''
            }`}>
            <div className="dropdown-trigger">
                <button
                    className="button"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                    aria-controls={`dropdown-menu ${label}`}>
                    <span>{value ? value : label}</span>
                    <span className="icon is-small">
                        <span class="material-icons">expand_more</span>
                    </span>
                </button>
            </div>
            <div
                className={`dropdown-menu ${label}`}
                id={`dropdown-menu`}
                role="menu">
                <div className="dropdown-content">
                    {items.map((item) => (
                        <span
                            role="button"
                            key={item}
                            onClick={() => onSelect(item)}
                            className={`dropdown-item ${
                                activeItem === item ? 'is-active' : ''
                            }`}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
