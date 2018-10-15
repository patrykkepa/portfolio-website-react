import React, { Component } from 'react';

import './Form.css';


const Form = (props) => {
    return (
        <section className="sectionForm">
        
        {/* <h1> Email</h1>
        <h1> Github</h1>
        <h1> LinkedIn</h1> */}


        {/* <h1><span role="img" aria-label="mail">🔥/span> </h1> */}
        {/* <h1><span role="img" aria-label="rocket">📬</span> You can catch me at:</h1> */}
        <h1> You can catch me at:</h1>
        <a href="mailto:patrykkepa.work@gmail.com"><h5>patrykkepa.work@gmail.com</h5></a>

        <h1><span role="img" aria-label="rocket"></span> To see more:</h1>
        <p><a href="#"><i className="fab fa-github"></i></a><a href="#"><i className="fab fa-linkedin-in"></i></a></p> 
        
        </section>
    )
}

export default Form;