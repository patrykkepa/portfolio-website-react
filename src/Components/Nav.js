import React, { Component } from 'react';

import '../css/components/nav.css';

import { Link } from 'react-router-dom'


import $ from 'jquery'
$(document).ready(function() {

    // ANIMACJA NAWIGACJI
    $('.e-link-section').find('a').on('click', () => {
        $('.e-link-section').css({
            'background': 'none',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'white',
            'transform': 'rotateY(0deg)',
            'transition': 'all 0ms'
        });
        
    })

    $('.e-link-section').each(function(){
        $(this).on('click', () => {
            $(this).css({
                'transform': 'rotateY(360deg)',
                'background': '-webkit-linear-gradient(110deg,#9586a6,#d7706d)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                'transition': 'all 400ms'
            });
        })
        
    }) // END

    // ANIMACJA MAIN
    $('.e-link-section').on('click', () => {
        $('#main').css({
            'transform': 'translateX(-25px)',
            'opacity': '0',
            'transition': 'all 0ms'
        });
    })

    $('.e-link-section').each(function(){
        $(this).on('click', () => {
            $('#main').css({
                'transform': 'translateX(25px)',
                'opacity': '0'
            });

            setTimeout(function() {
                $('#main').css({
                    'transform': 'translateX(0px)',
                    'opacity': '1',
                    'transition': 'all 100ms'
                });
            },200)
        })
        
    }) // END
    

})





const Nav = (props) => {
    return (
        <nav class="b-navigation">
            <ul>
                <li class="e-link-section e-link-sectionWelcome"><Link to="/">pk</Link></li>
            </ul>
            <ul>
                <li class="e-link-section e-link-sectionAbout"><Link to="/about">About</Link></li>
                <li class="e-link-section e-link-sectionWork"><Link to="/work">Work</Link></li>
                <li class="e-link-section e-link-sectionProjects"><Link to="/projects">Projects</Link></li>
                <li class="e-link-section e-link-sectionForm"><Link to="/form">Contact</Link></li>
            </ul>
            
        </nav>
    )
}

export default Nav;