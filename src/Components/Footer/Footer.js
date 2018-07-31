import React, { Component } from 'react';



import './Footer.css';

const Footer = (props) => {
    return (
        <footer>
            <div id="sectionFooter">
                <div className="b-footer">

                    <div className="row e-footer">
                        <div className="e-social-ikon">
                        <a className="e-social-ikon-a" href="#"><i className="fab fa-facebook e-social-ikon-i" aria-hidden="true"></i></a>
                        <a className="e-social-ikon-a" href="#"><i className="far fa-envelope-open e-social-ikon-i"></i></a>
                        <a className="e-social-ikon-a" href="#"><i className="fab fa-github e-social-ikon-i"></i></a>
                        <a className="e-social-ikon-a" href="#"><i className="fab fa-linkedin-in e-social-ikon-i"></i></a>
                        </div>
                        
                    </div>
                    <div className="row e-footer">
                        <p>Handmade by me © 2018.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;