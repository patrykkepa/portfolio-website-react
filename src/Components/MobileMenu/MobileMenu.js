import React from 'react';

import './MobileMenu.css';

import { Link } from 'react-router-dom'


const MobileMenu = (props) => {
    return (
        <section>
            <div id="mobileMenu">
                <div className="e-mobileMenu">
                    <span className="e-link-section e-link-sectionWelcome"><Link to="/#">pk</Link></span>
                    <span><Link to="/about">About</Link></span>
                    <span><Link to="/work">Work</Link></span>
                    <span><Link to="/form">Contact</Link></span>
                </div>
            </div>
        </section>
    )
}

export default MobileMenu;