import React, { Component } from 'react';

import './Poster.css';


import $ from 'jquery'
$(document).ready(function() {

       

})


const Poster = (props) => {


    return(
        <div id={props.id} className="o-posterContainer">
            
            
                <div className="e-posterTitle">
                    <i className="fas fa-arrow-right"></i>
                    <h1>{props.title}</h1>
                </div>

                <div className="e-posterDescription">
                    <p>{props.text}</p>
                    {props.icon}
                </div>
                
                <div className="e-posterImage"></div>


        </div>
    )
}



export default Poster;