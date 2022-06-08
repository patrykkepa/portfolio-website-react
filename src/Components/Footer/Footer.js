import React from 'react';



import './Footer.css';

const Footer = (props) => {
    return (
        <footer>
            <div id="sectionFooter">
                <div className="b-footer">

                    <div className="row e-footer">
                        <div className="e-social-ikon">
                        <a className="e-social-ikon-a" href="https://github.com/patrykkepa"><i className="fab fa-facebook e-social-ikon-i" aria-hidden="true"></i></a>
                        <a className="e-social-ikon-a" href="mailto:patrykkepa.work@gmail.com"><i className="far fa-envelope-open e-social-ikon-i"></i></a>
                        <a className="e-social-ikon-a" href="https://github.com/patrykkepa"><i className="fab fa-github e-social-ikon-i"></i></a>
                        <a className="e-social-ikon-a" href="https://www.linkedin.com/in/patryk-k%C4%99pa-ba79a1163/"><i className="fab fa-linkedin-in e-social-ikon-i"></i></a>
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