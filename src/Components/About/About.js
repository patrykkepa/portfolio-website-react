import React, { Component } from 'react';

import './About.css';

// import $ from 'jquery'
// $(document).ready(function() {

//     // ANIMACJA background
//     $('.fab').mouseover(function() {
//         $('.fab').animate({
//             opacity: 1,
            
//           }, 1000 );
// ;    })
    

// })



const About = (props) => {
    return (
        <section class="sectionAbout">
            <div className="e-about">
                <div className="e-about-left"><i class="elo far fa-envelope-open e-social-ikon-i"></i></div>
                <div className="e-about-right">
                    <h1>This is a About</h1>
                    <p>This is a About</p> 
                </div>
            </div>
            <div className="e-about">
                <div className="e-about-left"><i class="elo far fa-envelope-open e-social-ikon-i"></i></div>
                <div className="e-about-right">
                    <h1>This is a About</h1>
                    <p>This is a About</p> 
                </div>
            </div>
            <div className="e-about">
                <div className="e-about-left"><i class="elo far fa-envelope-open e-social-ikon-i"></i></div>
                <div className="e-about-right">
                    <h1>This is a About</h1>
                    <p>This is a About</p> 
                </div>
            </div>
            <div className="e-about">
                <div className="e-about-left"><i class="elo far fa-envelope-open e-social-ikon-i"></i></div>
                <div className="e-about-right">
                    <h1>This is a About</h1>
                    <p>This is a About</p> 
                </div>
            </div>
            
        </section>
    )
}

export default About;