import React, { Component } from 'react';

import '../css/components/nav.css';

import { Link } from 'react-router-dom'


const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Welcome</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/form">Form</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;