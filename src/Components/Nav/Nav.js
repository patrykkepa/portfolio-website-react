import React from 'react';

import './Nav.css';

import { Link } from 'react-router-dom'


import $ from 'jquery'
$(document).ready(function() {

    $(this).scrollTop(0);

    // {NAV} ANIMACJA NAWIGACJI
    setTimeout(function() {
        $('nav').addClass('nav--visible');
    },100)




    // {NAV} ANIMACJA LINKóW NAWIGACJI
    // reset wszystkich
    $('.e-link-section').find('a').on('click', () => {
        $('.e-link-section').removeClass('link--clicked');
    })
    // nadanie koloru
    $('.e-link-section').each(function(){
        $(this).find('a').on('click', () => {
            $(this).addClass('link--clicked');
        })
    }) 
     // END


    // {MAIN} ANIMACJA MAIN
    $('.e-link-section').on('click', () => {
        $('#main').removeClass('main--open');
    })

    $('.e-link-section').each(function(){
        $(this).on('click', () => {
            $('#main').addClass('main--in');

            setTimeout(function() {
                $('#main').removeClass('main--in');
                $('#main').addClass('main--open')
            },200)
        })
    })


    // {NAV} HAMBURGER
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('#mobileMenu').toggleClass("menu-open");
    
  });
    $('.e-mobileMenu').on("click", function(e) {
    $('#mobileMenu').removeClass("menu-open");
    $hamburger.removeClass("is-active");
  })


})




const Nav = (props) => {
    return (
        <nav className="b-navigation">
            <button className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <div className="e-navigation">
            
                <ul>
                    <li className="e-link-section e-link-sectionWelcome"><Link to="/">pk</Link></li>
                </ul>
                <ul>
                    <li className="e-link-section e-link-sectionAbout"><Link to="/about">About</Link></li>
                    <li className="e-link-section e-link-sectionWork"><Link to="/work">Work</Link></li>
                    <li className="e-link-section e-link-sectionForm"><Link to="/form">Contact</Link></li>
                </ul>
                
                
            </div>
            
            
        </nav>
    )
}

export default Nav;