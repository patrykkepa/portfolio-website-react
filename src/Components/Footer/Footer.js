import React, { Component } from 'react';



import './Footer.css';

const Footer = (props) => {
    return (
        <footer>
            <div id="sectionFooter">
                <div class="b-footer">

                    <div class="row e-footer">
                        <div class="e-social-ikon">
                        <a class="e-social-ikon-a" href="#"><i class="fab fa-facebook e-social-ikon-i" aria-hidden="true"></i></a>
                        <a class="e-social-ikon-a" href="#"><i class="far fa-envelope-open e-social-ikon-i"></i></a>
                        <a class="e-social-ikon-a" href="#"><i class="fab fa-github e-social-ikon-i"></i></a>
                        <a class="e-social-ikon-a" href="#"><i class="fab fa-linkedin-in e-social-ikon-i"></i></a>
                        </div>
                        
                    </div>
                    <div class="row e-footer">
                        <p>Handmade by me © 2018.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;