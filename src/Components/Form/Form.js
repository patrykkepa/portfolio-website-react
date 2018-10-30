import React from 'react';

import './Form.css';


const Form = (props) => {
    return (
        <section className="sectionForm">
    
        <h1> You can catch me at:</h1>
        <a href="mailto:patrykkepa.work@gmail.com"><h5>patrykkepa.work@gmail.com</h5></a>

        <h2><span role="img" aria-label="rocket"></span> To see more:</h2>
        <p><a href="https://github.com/patrykkepa"><i className="fab fa-github"></i></a><a href="https://github.com/patrykkepa"><i className="fab fa-linkedin-in"></i></a></p> 

        {/* <h1><span role="img" aria-label="mail">📬</span> Email me </h1>
        <p><span role="img" aria-label="rocket">🔥</span> In case of emergency :D you can catch me at:</p>
        <a href="mailto:patrykkepa.work@gmail.com"><h5>patrykkepa.work@gmail.com</h5></a> */}
        
        </section>
    )
}

export default Form;