import React from 'react';

import './PosterDetails.css';


const PosterDetails = (props) => {


    return(
        <div id={props.id} className="o-posterDetails">
            
            
                <div className="e-posterDetailsTitle">
                    <h1>{props.title}</h1>
                    <a href={props.href}><p className="e-posterDetailsLink">{props.hrefDesc}</p></a>
                    <a href={props.hrefGit}><p className="e-posterDetailsLink">GitHub</p></a>
                </div>

                <div className="e-posterDetailsStack">
                    <h1>Stack</h1>
                    {props.stack}
                </div>
                
                <div className="e-posterDetailInfo">
                    <h1>About project</h1>
                    {props.info}
                </div>


        </div>
    )
}



export default PosterDetails;