import React, { useRef } from 'react';
import { useState } from 'react';
import './Dropdown.scss';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import DropdownItem from './DropdownItem';

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
                    aria-label="more options"
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
                <div className="dropdown-content is-capitalized">
                    {children
                        ? children
                        : items.map((item) => (
                              <DropdownItem
                                  key={item}
                                  className={`dropdown-item ${
                                      activeItem === item ? 'is-active' : ''
                                  }`}
                                  onClick={() => onSelect(item)}>
                                  {item}
                              </DropdownItem>
                          ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
