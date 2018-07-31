import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch } from 'react-router-dom'
import {BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

import './index.css';

library.add(fab);


class App extends React.Component {
    
    render() {
        return (
            <Router>
                <div className="">
                    <Nav />
                    <Main />
                    <Footer />
                </div>
            </Router>
        )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

