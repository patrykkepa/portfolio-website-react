import React from 'react';

import './Poster.css';


const Poster = (props) => {


    return(
        <div id={props.id} className="o-posterContainer">
            
            
                <div className="e-posterTitle">
                    <i className="fas ">👉</i>  
                    <h1>{props.title}</h1>
                </div>

                <div className="e-posterDescription">
                    <p>{props.text}</p>
                    {props.icon}
                </div>
                
                <div className={props.posterImage}></div>


        </div>
    )
}



export default Poster; 