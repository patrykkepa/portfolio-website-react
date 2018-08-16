import React, { Component } from 'react';

import './Form.css';


const Form = (props) => {
    return (
        <section className="sectionForm">
        <h1><span role="img" aria-label="mail">📬</span> Email me </h1>
        <p><span role="img" aria-label="rocket">🔥</span> In case of emergency :D you can catch me at:</p>
        <a href="mailto:patrykkepa.work@gmail.com"><h5>patrykkepa.work@gmail.com</h5></a>
        
        </section>
    )
}

export default Form;