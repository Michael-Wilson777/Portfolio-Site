import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/AboutMe/AboutMe';
import Myprojects from './components/MyProjects/MyProjects';
import Contacts from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    
    <>
        <Header/>
        
        <Myprojects/>
        <div className="container pt-5">
          <div className="row">                        
            <About />                                   
            <Contacts />                                  
          </div>
        </div>
        <Footer/>

    </>
  )
}

export default App