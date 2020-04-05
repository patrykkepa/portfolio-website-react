import React from 'react';

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
                {!(window.location.href.includes('about') || window.location.href.includes('work') || window.location.href.includes('form')) ? 
                (null) : 

                (window.location.href.includes('about') ? 
                <Link className="e-mobileFooter-link" to="/work">Work<i className="fas fa-arrow-right"></i></Link> : 
                    (window.location.href.includes('work') ? 
                    <Link className="e-mobileFooter-link" to="/form">Contact<i className="fas fa-arrow-right"></i></Link> :
                        (window.location.href.includes('form') ? 
                        <Link className="e-mobileFooter-link" to="/about">About<i className="fas fa-arrow-right"></i></Link> :
                        (null) )))
                }


                {/* {!(window.location.href.includes('form')) ? 
                (null) : 
                (<Link className="e-mobileFooter-link" to="/about">About<i className="fas fa-arrow-right"></i></Link>)
                } */}


                
            </div>
        </section>
    )
}

export default MobileFooter;

