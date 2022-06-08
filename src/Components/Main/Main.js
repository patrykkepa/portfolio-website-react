import React from 'react';

import { Route, Switch } from 'react-router-dom'

import Welcome from './Welcome/Welcome';
import About from './About/About';
import Work from './Work/Work';
import Form from './Form/Form';

import './Main.css';


import $ from 'jquery'

class Main extends React.Component {
    
    render() {
        
        $(document).ready(function() {


            // {MAIN} ANIMACJA MAIN PO WCIŚNIĘCIU BUTTONA W WELCOME PAGE
            $('.e-welcomeLink-sectionAbout').on('click', function(){
                $('#main').removeClass('main--open');
                $('#main').addClass('main--in');
                setTimeout(function() {
                    $('#main').removeClass('main--in');
                    $('#main').addClass('main--open')
                },200)
            })

            // {NAV} KOLOR NAWIGACJI W ZALEŻNOŚCI OD ADRESU
            const adres = window.location.href;
            if(adres.includes('about')) {
                $('.e-link-sectionAbout').addClass('link--clicked');
            }
            if(adres.includes('work')) {
                $('.e-link-sectionWork').addClass('link--clicked');
            }
            if(adres.includes('projects')) {
                $('.e-link-sectionProjects').addClass('link--clicked');
            }
            if(adres.includes('form')) {
                $('.e-link-sectionForm').addClass('link--clicked');
            }
        
            // {TECHNOLOGY} DODAJE CLASS visible do o-card, powoduje otworzenie karty
            $('.o-card').each(function() {
                $(this).on('click', () => {
                    $(this).toggleClass('o-card--visible');
                })
            })       
            
            
        
        })

        
        return (
                <main id='main'>
                    <Switch>
                        <Route exact path="/" component={Welcome}/>
                        <Route path="/about" component={About}/>
                        <Route path="/work" component={Work}/>
                        <Route path="/form" component={Form}/>
                    </Switch>
                </main>
        )
    }
    
}

export default Main;