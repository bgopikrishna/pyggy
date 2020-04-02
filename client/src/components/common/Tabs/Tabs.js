/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Tabs = ({ items, changeTab, activeTabId }) => {
    return (
        <div className="tabs is-fullwidth ">
            <ul>
                {items.map((item) => (
                    <li
                        key={item.name}
                        className={activeTabId === item.id ? 'is-active' : ''}>
                        <a onClick={() => changeTab(item.id)}>
                            <span className="icon is-small">
                                <span className="material-icons">
                                    {item.icon}
                                </span>
                            </span>
                            <span>{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tabs;
