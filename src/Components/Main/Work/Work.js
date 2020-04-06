import React from 'react';


import Poster from './Poster/Poster';
import PosterDetails from './PosterDetails/PosterDetails';

import './Work.css';

import $ from 'jquery'


class Work extends React.Component {

    componentDidMount() {
        
            // {POSTER} DODAJE ANIMACJE DO POSTERIMAGE
        $('#e-posterBackground--myPortfolio').find('.e-posterTitle').on('click', function(){
            $('#e-posterBackground--myPortfolio').find('.e-posterImage').toggleClass('posterImage--open');

            $('html, body').animate({
                scrollTop:  $('#e-posterBackground--myPortfolio').offset().top - 200
            }, 200);
            
            setTimeout(function() {
                $('#e-posterDetails--myPortfolio').toggleClass('o-posterDetails--displayed');
            },200)
            setTimeout(function() {
                $('#e-posterDetails--myPortfolio').toggleClass('o-posterDetails--visible');
            },400)
            
        });
        $('#e-posterBackground--shopStreetwear').find('.e-posterTitle').on('click', function(){
            $('#e-posterBackground--shopStreetwear').find('.e-posterImage').toggleClass('posterImage--open');

            $('html, body').animate({
                scrollTop:  $('#e-posterBackground--shopStreetwear').offset().top - 200
            }, 400);
            
            setTimeout(function() {
                $('#e-posterDetails--shopStreetwear').toggleClass('o-posterDetails--displayed');
            },200)
            setTimeout(function() {
                $('#e-posterDetails--shopStreetwear').toggleClass('o-posterDetails--visible');
            },400)
        });
    }

    render() {
        return(
            <section className="sectionWork">
                <Poster 
                    id="e-posterBackground--myPortfolio" 
                    title="My Portfolio" 
                    icon={<div className="e-posterIcon"><i className="fab fa-react"></i><div className="label">React.js</div></div>}
                    text="My portfolio website, written in React.js"
                    posterImage="e-posterImage e-posterImage--myPortfolio"
                />
                <PosterDetails 
                    id="e-posterDetails--myPortfolio"
                    title="Visit"
                    href="https://patrykkepa.github.io/portfolio-website-react/#/"
                    hrefDesc="patrykkepa.github.io/portfolio-website-react"
                    hrefGit="https://github.com/patrykkepa/portfolio-website-react"
                    stack={<p><h6>React.js</h6><h6>React Router</h6><h6>jQuery</h6><h6>Sass</h6></p>}
                    info={<p>I created this page to briefly describe who I am and to collect and present my projects in one place. This is the third version of my portfolio page, and the passage through all stages of its creation has consolidated my knowledge of the basics of programming websites. <br></br>Inspired by the latest trend of web design, I've created a simple website based on the React.js library.</p>}
                />
                <Poster 
                    id="e-posterBackground--shopStreetwear" 
                    title="Streetwear Shop" 
                    icon={<div className="e-posterIcon"><i className="fab fa-react"></i><div className="label">React.js</div></div>}
                    text="A simple example of a page with dynamically changing data."
                    posterImage="e-posterImage e-posterImage--StreetwearShop"
                />
                <PosterDetails 
                    id="e-posterDetails--shopStreetwear"
                    title="Visit"
                    href='https://patrykkepa.github.io/shop-app-react/#/'
                    hrefDesc="patrykkepa.github.io/shop-app-react"
                    hrefGit="https://github.com/patrykkepa/shop-app-react"
                    stack={<p><h6>React.js</h6><h6>React Router</h6></p>}
                    info={<p>This application was created on the first contact with the React.js library based on the Wes Boss course. It gave me the opportunity to understand the usefulness of using this library <br></br> The opportunity to experiment and customize a working application for your needs and ideas is a great opportunity to have a good understanding and practice of the technologies learned.</p>}
                />
                
            </section>
        )
    }
}
 


export default Work;