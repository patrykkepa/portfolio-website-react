This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

```
1. Struktura plików aplikacji:

  src/Index.js -   
                Zawiera główny routing aplikacji,  
                Posiada osobny plik SCSS z Mixins, Variables, Media Queries dla całej aplikacji  
  src/assets -  
                Zawiera dodatkowe źródła js i styli  
  src/Components -  
                  Zawiera foldery z komponentami aplikacji, posiadające plik js, scss i css  


2. Struktura komponentów aplikacji:  

  Index.js -  
            <Nav />           - nawigacja widoczna zawsze
            <ScrollToTop>     - komponent zewnętrzny - wczytuje nowe komponenty zawarte w Main scrollując do góry 
            <Main />          - komponent rodzic - zawiera Switch Route z głównymi komponentami aplikacji
            </ScrollToTop>
            <MobileMenu />    - komponent mozliwy do wyswietlenia na urzadzeniach mobilnych, pokazywany po aktywacji buttonem mobilnej nawigacji 
            <MobileFooter />  - komponent dla urzadzen mobilnych, wyswietlany w about i work, daje mozliwosc nawigacji do kolejnej podstrony
            <Footer />        - stopka widoczna zawsze

  Main.js -  
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route path="/about" component={About}/>
              <Route path="/work" component={Work}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/form" component={Form}/>
            </Switch>

  About.js -   
             ...  
             <Technology />  

  Work.js -  
             <Poster /> 


3. Funkcje:  
            Funkcje zawarte w danym komponencie powinny dotyczyć dzieci komponentu, bezpośrednio danego komponentu, lub w nich wywoływane mieć wpływ na komponenty sąsiednie.

            - Nav.js -   {NAV} ANIMACJA NAWIGACJI
                         {NAV} ANIMACJA LINKóW NAWIGACJI
                         {MAIN} ANIMACJA MAIN

            - Main.js - 
                         {MAIN} ANIMACJA MAIN PO WCIŚNIĘCIU BUTTONA W WELCOME PAGE
                         {NAV} KOLOR NAWIGACJI W ZALEŻNOŚCI OD ADRESU
                         {TECHNOLOGY} DODAJE CLASS visible do o-card, powoduje otworzenie karty

            - Welcome.js - 
                         {WELCOME} TYPING ANIMATION, on load,  oraz dodanie klasy animacyjnej do buttona i nav po zakonczeniu pisania
                         {WELCOME} TYPING ANIMATION, po aktywowaniu linkiem
            
            - About.js - 
                         {TECHNOLOGY} DODAJE CLASS visible do o-card, powoduje otworzenie karty



                        
```