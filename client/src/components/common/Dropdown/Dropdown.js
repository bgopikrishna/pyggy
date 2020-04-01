import React, { useRef } from 'react';
import { useState } from 'react';
import './Dropdown.scss';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const Dropdown = ({
    label,
    items,
    value = '',
    onChange,
    className = '',
    children
}) => {
    const [activeItem, setActiveItem] = useState(value);
    const [dropdownState, setDropdownState] = useState(false);
    const ref = useRef();

    useOnClickOutside(ref, () => setDropdownState(false));

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
            className={`dropdown is-right ${className} ${
                dropdownState ? 'is-active' : ''
            }`}>
            <div className="dropdown-trigger">
                <button
                    className="button is-borderless"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                    aria-controls={`dropdown-menu ${label}`}>
                    {label && <span>{value ? value : label}</span>}
                    <span className="icon is-small">
                        <span className="material-icons">more_vert</span>
                    </span>
                </button>
            </div>
            <div
                ref={ref}
                className={`dropdown-menu ${label}`}
                id={`dropdown-menu`}
                role="menu">
                <div className="dropdown-content">
                    {children
                        ? children
                        : items.map((item) => (
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
