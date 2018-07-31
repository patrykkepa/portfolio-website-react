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
            <section className="sectionAbout">
            <div className="e-about">
                <div className="e-about-left"></div>
                <div className="e-about-right">
                    
                    <h1><i className="fas fa-child"></i>Who am I</h1>
                    
                    <p>My name is Filip Kajetaniak and I'm looking for a junior front-end web developer position. I'm 22 years old. I'm based in Warsaw (but I'm willing to move if necessary). I design and build web apps with HTML, CSS, JavaScript and Vue.js.</p> 
                </div>
            </div>
            <div className="e-about">
                <div className="e-about-left"></div>
                <div className="e-about-right">
                    
                    <h1><i className="fas fa-fire"></i>Passion</h1>
                    <p>I live to create cool things. Seriously. I don't think there is anything better to do. I've been creating stuff my entire life. I used to draw, compose music and make killer potato salads untill I came across the Web Dev. And oh boy I tell you, now I'm madly into it. I love it because it's one of only few things in this world that combines aesthetics with logic.</p> 
                </div>
            </div>
            <div className="e-about">
                <div className="e-about-left"></div>
                <div className="e-about-right">
                    
                    <h1><i className="fas fa-hand-point-right"></i>Future</h1>
                    <p>By day I work on achieving a black belt in JavaScript. By night I dip my toes in some back-end stuff like Express, Node.js and MongoDB to make apps much more functional.</p> 
                </div>
            </div>
            <div className="e-about">
                <div className="e-about-left"></div>
                <div className="e-about-right">
                    
                    <h1><i className="fas fa-wrench"></i>Tools / workflow</h1>
                    <p>I use Git and VS Code with ESLint and Emmet on daily basis. I design websites with Photoshop and Illustrator and then turn the designs into code with Sass. I organize and bundle files with Webpack. I care for all generations so I make sure my websites are cross-browser compatible with Babel and Autoprefixer.</p> 
                </div>
            </div>
            
        </section>

        
    )
}

export default About;