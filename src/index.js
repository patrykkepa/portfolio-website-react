import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router } from 'react-router-dom'

import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';

import './css/style.css';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Main />
                    <Footer />
                </div>
            </Router>
        )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));

