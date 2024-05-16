import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/AboutMe/AboutMe';
import HomePage from './components/pages/HomePage';
// import Contacts from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    
    <>
        <Header/>       
        <Myprojects/>                        
        <About />                                                                    
        <Footer/>

    </>
  )
}

export default App