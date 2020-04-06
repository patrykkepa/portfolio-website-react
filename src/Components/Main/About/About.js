import React from 'react';

import Technology from './Technology/Technology';

import './About.css';

import $ from 'jquery'
$(document).ready(function() {

    // {TECHNOLOGY} DODAJE CLASS visible do o-card, powoduje otworzenie karty
    $('.o-card').each(function() {
        $(this).on('click', () => {
            $(this).toggleClass('o-card--visible');
        })
    })        

})


const About = (props) => {
    return (
            <section className="sectionAbout">
            <div className="e-about">
                <div className="e-about-left"></div>
                <div className="e-about-right">
                    <h1><span role="img" aria-label="boy">👨🏻‍💻</span> Who am I</h1>
                    <p>My name is Patryk Kępa and I'am 23 years old enthusiast of art and technology. After getting into architecture studies I re-evaluated my priorities and I decided to become a web developer. Now I'm trying to teach myself as much as I can and get a job as a junior react developer.</p> 
                </div>
            </div>
            <div className="e-about">
                <div className="e-about-left"></div>
                <div className="e-about-right">
                    
                    <h1><span role="img" aria-label="rocket">🚀</span> Passion</h1>
                    <p>It will be extremely rewarding to be a part of a modern tech company, coding staff that is pleasant to watch and use, be up to date with technological and design news, working with other passionate about their job coders. After all these months of learning in every free moment I'm still into it.</p> 
                </div>
            </div>
            <div className="e-about">
                <div className="e-about-left"></div>
                <div className="e-about-right">
                    
                    <h1><span role="img" aria-label="clock">⏰</span> Future</h1>
                    <p>Now I think that it's the best time for me to work with other developers, seeing some real world issues, and get to the next level. Naturally, at the moment I am trying to get a front-end job, however, I always have the desire to look deeper and find out how things work at the foundation, so front-end might not be my last stop.</p> 
                </div>
            </div>
            <div className="e-about">
                <div className="e-about-left"></div>
                <div className="e-about-right">
                    
                    <h1><span role="img" aria-label="wheel">⚙️</span> Tools / workflow</h1>
                    <p>Even though I'm learning on my own I do not close myself in my world, but I learn from the best and gets to know the programming environment through YouTube videos, React and Javascript newsletter's, Wes Boss and other podcasts. Preparing to work in a team I use Git and GitHub, Webpack, ESLint on my daily basis.</p> 
                </div>
            </div>

            <Technology />
        
        </section>

        
    )
}

export default About;