import React, { Component } from 'react';

import './MobileFooter.css';

import { Link } from 'react-router-dom'



import $ from 'jquery'
$(document).ready(function() {

    // {MAIN} ANIMACJA MAIN
    $('#mobileFooter').on('click', () => {
        $('#main').removeClass('main--open');
    })

    $('#mobileFooter').each(function(){
        $(this).on('click', () => {
            $('#main').addClass('main--in');

            setTimeout(function() {
                $('#main').removeClass('main--in');
                $('#main').addClass('main--open')
            },200)
        })
    })

})



const MobileFooter = (props) => {
    return (
        <section>
            <div id="mobileFooter">
                {/* Mobile footer display condition */}
                {!(window.location.href.includes('about') || window.location.href.includes('work')) ? 
                (null) : 
                (window.location.href.includes('about') ? 
                <Link className="e-mobileFooter-link" to="/work">Work<i class="fas fa-arrow-right"></i></Link> : 
                <Link className="e-mobileFooter-link" to="/form">Contact<i class="fas fa-arrow-right"></i></Link>)
                }


                
            </div>
        </section>
    )
}

export default MobileFooter;

