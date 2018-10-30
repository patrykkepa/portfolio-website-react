import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import MobileFooter from './Components/MobileFooter/MobileFooter';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

import './index.css';

library.add(fab);


class App extends React.Component {
    
    render() {

        
        return (
            <Router>
                <div className="">
                    <Nav />
                    <ScrollToTop>
                    <Main />
                    </ScrollToTop>
                    <MobileMenu />
                    <MobileFooter />
                    <Footer />
                </div>
            </Router>
        )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

