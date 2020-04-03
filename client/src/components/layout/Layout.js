import React from 'react';
import Navbar from './Navbar/Navbar';
import DesktopNavbar from './DesktopNavbar/DesktopNavbar';

const Layout = ({ children }) => {
    return (
        <div className="container is-desktop">
            <DesktopNavbar></DesktopNavbar>
            <Navbar></Navbar>
            <main> {children}</main>
        </div>
    );
};

export default Layout;
