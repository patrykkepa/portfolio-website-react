import React, { Component } from 'react';

import Poster from '../Poster/Poster';
import './Work.css';


class Work extends React.Component {
    render() {
        return(
            <section className="sectionWork">
                <Poster 
                    id="e-posterBackground--myPortfolio" 
                    title="My Portfolio" 
                    icon={<div className="e-posterIcon"><i className="fab fa-react"></i><div className="label">React.js</div></div>}
                    text="My portfolio website, written in React.js"
                />
                <Poster 
                    id="e-posterBackground--shopStreetwear" 
                    title="Streetwear Shop" 
                    icon={<div className="e-posterIcon"><i className="fab fa-react"></i><div className="label">React.js</div></div>}
                    text="A simple example of a page with dynamically changing data."
                />
            </section>
        )
    }
}
 


export default Work;