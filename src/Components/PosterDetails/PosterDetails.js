import React, { Component } from 'react';

import './PosterDetails.css';


import $ from 'jquery'
$(document).ready(function() {

       

})


const PosterDetails = (props) => {


    return(
        <div id={props.id} className="o-posterDetails">
            
            
                <div className="e-posterDetailsTitle">
                    <h1>{props.title}</h1>
                    <p>{props.titleDesc}</p>
                </div>

                <div className="e-posterDetailsStack">
                    <h1>Stack</h1>
                    <p>{props.stack}</p>
                </div>
                
                <div className="e-posterDetailInfo">
                    <h1>About project</h1>
                    <p>{props.info}</p>
                </div>


        </div>
    )
}



export default PosterDetails;