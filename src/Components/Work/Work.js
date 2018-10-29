import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import Poster from '../Poster/Poster';
import MobileFooter from '../MobileFooter/MobileFooter';

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
                {/* <MobileFooter 
                link={<Link className="e-mobileFooter-link" to="/form">Contact<i class="fas fa-arrow-right"></i></Link>} 
                /> */}
            </section>
        )
    }
}
 


export default Work;