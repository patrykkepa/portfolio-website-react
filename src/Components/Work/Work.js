import React from 'react';


import Poster from '../Poster/Poster';
import PosterDetails from '../PosterDetails/PosterDetails';

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
                />
                <PosterDetails 
                    id="e-posterDetails--myPortfolio"
                    title="My Portfolio"
                    titleDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    stack="React"
                    info="Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus."
                />
                <Poster 
                    id="e-posterBackground--shopStreetwear" 
                    title="Streetwear Shop" 
                    icon={<div className="e-posterIcon"><i className="fab fa-react"></i><div className="label">React.js</div></div>}
                    text="A simple example of a page with dynamically changing data."
                />
                <PosterDetails 
                    id="e-posterDetails--shopStreetwear"
                    title="My Portfolio"
                    titleDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    stack="React"
                    info="Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus."
                />
                
            </section>
        )
    }
}
 


export default Work;