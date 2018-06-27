import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'

import Welcome from './Welcome';
import Work from './Work';
import Projects from './Projects';
import Form from './Form';

import '../css/components/main.css';


const Main = (props) => {
    return (
        <main id='main'>
              <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/work" component={Work}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/form" component={Form}/>
              </Switch>
        </main>
    )
}

export default Main;