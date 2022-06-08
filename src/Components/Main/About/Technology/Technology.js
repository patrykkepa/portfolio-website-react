import React from 'react';
import { Fragment } from 'react';


import './Technology.css';


const Technology = (props) => {
    return (
        <Fragment>
            <h3><span role="img" aria-label="starr">⭐</span>️ Skills </h3>
            <section className="o-card-wrapper">

                <div className="column-left">
                    <div className="o-card first">
                        <div className="e-card-title">
                            <h4>HTML</h4>
                            <h5>BEM</h5>
                        </div>
                        <div className="e-card-body">
                            <p>I structurize my html code using block elements like NAV, SECTION, FOOTER. Also, I use popular css class names convention BEM.</p>
                        </div>
                        <div className="e-card-footer">
                            <h6>Confident, for my own use</h6>
                        </div>
                    </div>
                    <div className="o-card first">
                        <div className="e-card-title">
                            <h4>CSS</h4>
                            <h5>SASS</h5>
                        </div>
                        <div className="e-card-body">
                            <p>In my projects I like to use MIXINS for media queries, and other reusable pieces od code. Also I prefer to keep all of the colours in one file and use them as a variables.</p>
                        </div>
                        <div className="e-card-footer">
                            <h6>I know the rules of Sass.</h6>
                            <h6>But have't seen many applications.</h6>

                        </div>
                    </div>
                    <div className="o-card third">
                        <div className="e-card-title">
                            <h4>GIT</h4>
                            <h5>GitHub</h5>
                        </div>
                        <div className="e-card-body">
                            <p>Since I started to code my actual (third :D) portfolio website I use git with github, I think the most important is regularity and order.</p>
                        </div>
                        <div className="e-card-footer">
                            <h6>I use it only by working alone.</h6>
                            <h6>Basic branches menagement, commits, remote repositiories, etc.</h6>
                        </div>
                    </div>
                </div>

                <div className="column-right">
                <div className="o-card secound">
                        <div className="e-card-title">
                            <h4>JavaScript</h4>
                            <h5>Vanilla JS, jQuery</h5>
                        </div>
                        <div className="e-card-body">
                        <p>I have been using ES6 since the beggining of my adventure with JS, so his novelties are something natural to me. For writing short functions I prefer to use jQuery.</p>
                        </div>
                        <div className="e-card-footer">
                            <h6>I know basics well.</h6> 
                            <h6>Now I try to get to know advanced topics better.</h6>
                        </div>
                    </div>
                    <div className="o-card secound">
                        <div className="e-card-title">
                            <h4>REACT</h4>
                            <h5>ROUTER, WEBPACK4, BABEL</h5>
                        </div>
                        <div className="e-card-body">
                            <p>My whole portfolio is written with React, it uses React Router, module boundler Webpack and Babel compiler.</p>
                        </div>
                        <div className="e-card-footer">
                            <h6>Pretty confident.</h6>
                            <h6>It is time to learn more from others</h6>
                        </div>
                    </div>
                    <div className="o-card third">
                        <div className="e-card-title">
                            <h4>DATABASE</h4>
                            <h5>FIREBASE</h5>
                        </div>
                        <div className="e-card-body">
                            <p>I used Firebase in a CRUD application with the option of creating an account, logging in, logging out, deleting an account and manipulation of data stored in the database.</p>
                        </div>
                        <div className="e-card-footer">
                            <h6>I worked with Realtime Database.</h6>
                            <h6>No I want to know Cloud Firestore.</h6>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Technology;