import React, { Component } from 'react';

import './Poster.css';

const Poster = (props) => {
    return(
        <div id="" className="o-posterContainer">
            
            <div className="o-poster">
                <div className="e-posterTitle">
                    <i className="fas fa-arrow-right"></i>
                    <h1>{props.title}</h1>
                </div>
                <div id={props.id} className="e-posterBackground">
                </div>
                <div className="e-posterImage">
                </div>
                <div className="e-posterDescription">
                    <p>{props.text}</p>
                    {props.icon}
                </div>
            </div>
            
        </div>
    )
}




export default Poster;