import React, { Component } from 'react';

import './MobileMenu.css';

import { Link } from 'react-router-dom'


const MobileMenu = (props) => {
    return (
        <section>
            <div id="mobileMenu">
                <div class="e-mobileMenu">
                    <span><Link to="/about">About</Link></span>
                    <span><Link to="/work">Work</Link></span>
                    <span><Link to="/form">Contact</Link></span>
                </div>
            </div>
        </section>
    )
}

export default MobileMenu;