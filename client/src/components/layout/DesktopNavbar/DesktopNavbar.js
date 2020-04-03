import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const DesktopNavbar = () => {
    return (
        <nav
            className="navbar is-hidden-mobile is-hidden-tablet-only has-margin-bottom-20 box is-shadowless has-padding-10"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
                <Link
                    className="navbar-item has-text-weight-bold has-text-primary title title-3"
                    to="/">
                    Pyggy
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <NavLink
                        to="/home"
                        className="nav-link has-text-centered w-100 is-flex justify-content-around align-items-center has-padding-10 has-text-black-ter">
                        <span className="icon has-margin-10">
                            <i className="material-icons">home</i>
                        </span>{' '}
                        <span>Home</span>
                    </NavLink>

                    <NavLink
                        to="/search"
                        className="nav-link has-text-centered w-100 is-flex justify-content-around align-items-center has-padding-10 has-text-black-ter">
                        <span className="icon has-margin-10">
                            <i className="material-icons">search</i>{' '}
                        </span>{' '}
                        <span>Search</span>
                    </NavLink>

                    <NavLink
                        to="/list"
                        className="nav-link has-text-centered w-100 is-flex justify-content-around align-items-center has-padding-10 has-text-black-ter">
                        <span className="icon has-margin-10">
                            <i className="material-icons">
                                format_list_bulleted
                            </i>{' '}
                        </span>{' '}
                        <span>List</span>
                    </NavLink>

                    <NavLink
                        to="/account"
                        className="nav-link has-text-centered w-100 is-flex justify-content-around align-items-center has-padding-10 has-text-black-ter">
                        <span className="icon has-margin-10">
                            <i className="material-icons">account_circle</i>{' '}
                        </span>{' '}
                        <span>Account</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default DesktopNavbar;
