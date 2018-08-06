import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import TypeIt from 'typeit';

import './Welcome.css';


import $ from 'jquery'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
$(document).ready(function() {

    setTimeout(function() {
        $('nav').addClass('nav--visible');
    },100)
    
    // TYPING ANIMATION, oraz dodanie klasy animacyjnej do buttona i nav po zakonczeniu pisania
    setTimeout(() => {
        new TypeIt('#example1', {
            // strings: ["Hello, World.", "Take a look at my portfolio."],
            speed: 30,
            breakLines: true,
            autoStart: false,
            afterComplete: function (instance) {
                setTimeout(function() {
                    $('.e-welcomeLink-sectionAbout').addClass('welcomeLink--animated');
                },300)
            }
        })
        .type("Hello, World.")
        .pause(1000)
        .break()
        .options({speed: 40})
        .type("Take a look at my portfolio.")

    }, 800); //END


    // TYPING ANIMATION, po aktywowaniu linkiem
    $('.e-link-sectionWelcome').find('a').on('click', () => {

            $('.e-welcomeLink-sectionAbout').removeClass('welcomeLink--animated');
            setTimeout(() => {
                new TypeIt('#example1', {
                    // strings: ["Hello, World.", "Take a look at my portfolio."],
                    speed: 30,
                    breakLines: true,
                    autoStart: false,
                    afterComplete: function (instance) {
                        setTimeout(function() {
                            $('.e-welcomeLink-sectionAbout').addClass('welcomeLink--animated');
                        },200) //END
                    }
                })
                .type("Hello, World.")
                .pause(1000)
                .break()
                .options({speed: 40})
                .type("Take a look at my portfolio.")
        
            }, 500);

            
            
            

    }) //END


})

    

const Welcome = (props) => {
    return (
        <section className="welcome">
            <p id="example1"></p>
            <button className="e-welcomeLink-sectionAbout"><Link to="/about"><i className="fas fa-arrow-right"></i></Link></button>
            
        </section>
    )
}

export default Welcome;