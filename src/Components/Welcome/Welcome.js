/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Link } from 'react-router-dom';

import TypeIt from 'typeit';


import './Welcome.css';


import $ from 'jquery';

$(document).ready(() => {
  // {WELCOME} TYPING ANIMATION, on load,  oraz dodanie klasy animacyjnej do buttona i nav po zakonczeniu pisania
  setTimeout(() => {
    new TypeIt('#example1', {
      // strings: ["Hello, I am glad you are here.", "Please take a look at my portfolio."],
      speed: 60,
      breakLines: true,
      autoStart: false,
      afterComplete(instance) {
        setTimeout(() => {
          $('.e-welcomeLink-sectionAbout').addClass('welcomeLink--animated');
        }, 100);
      },
    })
      .type('Hi there! ')
      .pause(1000)
      .break()
      .options({ speed: 40 })
      .type('Please, check my portfolio.');
  }, 900); // END


  // {WELCOME} TYPING ANIMATION, po aktywowaniu linkiem
  $('.e-link-sectionWelcome').find('a').on('click', () => {
    $('.e-welcomeLink-sectionAbout').removeClass('welcomeLink--animated');
    setTimeout(() => {
      new TypeIt('#example1', {
        // strings: ["Hello, I am glad you are here.", "Please take a look at my portfolio."],
        speed: 60,
        breakLines: true,
        autoStart: false,
        afterComplete(instance) {
          setTimeout(() => {
            $('.e-welcomeLink-sectionAbout').addClass('welcomeLink--animated');
          }, 100); // END
        },
      })
        .type('Hi there!')
        .pause(100)
        .break()
        .options({ speed: 40 })
        .type('Please, check my portfolio.');
    }, 900);
  }); // END
});


const Welcome = props => (
  <section className="welcome">
    <p id="example1" />
    <div className="e-welcomeLink-sectionAbout">
      <Link to="/about">
        <i className="fas ">👉</i>
      </Link>
    </div>
  </section>
);

export default Welcome;
