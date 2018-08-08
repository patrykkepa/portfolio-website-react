import React, { Component } from 'react';

import './Nav.css';

import { Link } from 'react-router-dom'


import $ from 'jquery'
$(document).ready(function() {

    $(this).scrollTop(0);

    // ANIMACJA NAWIGACJI
    setTimeout(function() {
        $('nav').addClass('nav--visible');
    },100)




    // ANIMACJA LINKóW NAWIGACJI
    // reset wszystkich
    $('.e-link-section').find('a').on('click', () => {
        $('.e-link-section').removeClass('link--clicked');
    })
    // nadanie koloru
    $('.e-link-section').each(function(){
        $(this).on('click', () => {
            $(this).addClass('link--clicked');
        })
    }) 
    // warunek
    const adres = window.location.href;
    if(adres.includes('about')) {
        $('.e-link-sectionAbout').addClass('link--clicked');
    }
    if(adres.includes('work')) {
        $('.e-link-sectionWork').addClass('link--clicked');
    }
    if(adres.includes('projects')) {
        $('.e-link-sectionProjects').addClass('link--clicked');
    }
    if(adres.includes('form')) {
        $('.e-link-sectionForm').addClass('link--clicked');
    } // END





    // ANIMACJA MAIN
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

})





const Nav = (props) => {
    return (
        <nav className="b-navigation">
            <div className="e-navigation">
                <ul>
                    <li className="e-link-section e-link-sectionWelcome"><Link to="/">pk</Link></li>
                </ul>
                <ul>
                    <li className="e-link-section e-link-sectionAbout"><Link to="/about">About</Link></li>
                    <li className="e-link-section e-link-sectionWork"><Link to="/work">Work</Link></li>
                    <li className="e-link-section e-link-sectionProjects"><Link to="/projects">Projects</Link></li>
                    <li className="e-link-section e-link-sectionForm"><Link to="/form">Contact</Link></li>
                </ul>
            </div>
            
            
        </nav>
    )
}

export default Nav;