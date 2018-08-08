import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'

import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Work from '../Work/Work';
import Projects from '../Projects/Projects';
import Form from '../Form/Form';

import './Main.css';


 

class Main extends React.Component {
    
    render() {
        
        return (
                <main id='main'>
                    <Switch>
                        <Route exact path="/" component={Welcome}/>
                        <Route path="/about" component={About}/>
                        <Route path="/work" component={Work}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/form" component={Form}/>
                    </Switch>
                </main>
        )
    }
    
}

export default Main;