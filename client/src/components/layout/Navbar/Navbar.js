import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="nav-wrapper w-100">
            <ul className="columns is-gapless is-mobile">
                <li className="column">
                    <a
                        href="/"
                        className="is-primary has-text-centered w-100 is-flex justify-content-center has-padding-10 has-background-primary	 has-text-light">
                        <span className="icon has-margin-right-5">
                            <i className="material-icons">home</i>
                        </span>{' '}
                        <span>Home</span>
                    </a>
                </li>
                <li className="column">
                    <a
                        href="/"
                        className="is-primary has-text-centered w-100 is-flex justify-content-center has-padding-10 has-background-primary	 has-text-light">
                        <span className="icon has-margin-right-5">
                            <i className="material-icons">search</i>{' '}
                        </span>{' '}
                        <span>Search</span>
                    </a>
                </li>

                <li className="column">
                    <a
                        href="/"
                        className="is-primary has-text-centered w-100 is-flex justify-content-center has-padding-10 has-background-primary	 has-text-light">
                        <span className="icon has-margin-auto">
                            <i className="material-icons">add_circle</i>{' '}
                        </span>{' '}
                    </a>
                </li>

                <li className="column">
                    <a
                        href="/"
                        className="is-primary has-text-centered w-100 is-flex justify-content-center has-padding-10 has-background-primary	 has-text-light">
                        <span className="icon has-margin-right-5">
                            <i className="material-icons">format_list_bulleted</i>{' '}
                        </span>{' '}
                        <span>List</span>
                    </a>
                </li>

                <li className="column">
                    <a
                        href="/"
                        className="is-primary has-text-centered w-100 is-flex justify-content-center has-padding-10 has-background-primary	 has-text-light">
                        <span className="icon has-margin-right-5">
                            <i className="material-icons">account_circle</i>{' '}
                        </span>{' '}
                        <span>Account</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
