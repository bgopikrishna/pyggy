import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <Menu mode="horizontal" className="navbar__list">
                <Menu.Item className="navbar__list__item">
                    <Icon type="unordered-list" />
                    <NavLink to="/">Goals</NavLink>
                </Menu.Item>
                <Menu.Item className="navbar__list__item">
                    <Icon type="user" />
                    <NavLink to="/account">Account</NavLink>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
