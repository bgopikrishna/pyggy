import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="nav-wrapper is-hidden-desktop w-100">
            <ul className="columns is-gapless is-mobile has-background-white-ter">
                <li className="column">
                    <NavLink
                        to="/home"
                        className="nav-link has-text-centered w-100 is-flex justify-content-center has-padding-10 has-text-black-ter">
                        <span className="icon ">
                            <i className="material-icons">home</i>
                        </span>{' '}
                        {/* <span>Home</span> */}
                    </NavLink>
                </li>
                <li className="column">
                    <NavLink
                        to="/search"
                        className="nav-link has-text-centered w-100 is-flex justify-content-center has-padding-10 has-text-black-ter">
                        <span className="icon ">
                            <i className="material-icons">search</i>{' '}
                        </span>{' '}
                        {/* <span>Search</span> */}
                    </NavLink>
                </li>

                <li className="column">
                    <Link
                        to="/create"
                        className="button is-borderless has-background-white-ter has-text-centered w-100 is-flex justify-content-center has-padding-10 has-text-black-ter">
                        <span className="icon has-margin-auto">
                            <i className="material-icons">add_circle_outline</i>{' '}
                        </span>{' '}
                    </Link>
                </li>

                <li className="column">
                    <NavLink
                        to="/list"
                        className="nav-link has-text-centered w-100 is-flex justify-content-center has-padding-10 has-text-black-ter">
                        <span className="icon ">
                            <i className="material-icons">
                                format_list_bulleted
                            </i>{' '}
                        </span>{' '}
                        {/* <span>List</span> */}
                    </NavLink>
                </li>

                <li className="column">
                    <NavLink
                        to="/account"
                        className="nav-link has-text-centered w-100 is-flex justify-content-center has-padding-10 has-text-black-ter">
                        <span className="icon ">
                            <i className="material-icons">account_circle</i>{' '}
                        </span>{' '}
                        {/* <span>Account</span> */}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
