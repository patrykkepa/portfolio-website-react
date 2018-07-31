import React, { Component } from 'react';

import './Nav.css';

import { Link } from 'react-router-dom'


import $ from 'jquery'
$(document).ready(function() {


    // ANIMACJA LINKóW NAWIGACJI
    $('.e-link-section').find('a').on('click', () => {
        $('.e-link-section').css({
            'background': 'none',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'white',
            // 'transform': 'rotateY(0deg)',
            'transition': 'all 0ms'
        });
        
    })

    $('.e-link-section').each(function(){
        $(this).on('click', () => {
            $(this).css({
                // 'transform': 'rotateY(360deg)',
                'background': '#0098ff',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                'transition': 'all 400ms'
            });
        })
        
    }) // END


    // ANIMACJA MAIN
    // $('.e-link-section').on('click', () => {
    //     $('#main').css({
    //         'transform': 'translateX(-25px)',
    //         'opacity': '0',
    //         'transition': 'all 0ms'
    //     });
    // })

    // $('.e-link-section').each(function(){
    //     $(this).on('click', () => {
    //         $('#main').css({
    //             'transform': 'translateX(25px)',
    //             'opacity': '0'
    //         });

    //         setTimeout(function() {
    //             $('#main').css({
    //                 'transform': 'translateX(0px)',
    //                 'opacity': '1',
    //                 'transition': 'all 100ms'
    //             });
    //         },200)
    //     })
        
    // }) // END

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