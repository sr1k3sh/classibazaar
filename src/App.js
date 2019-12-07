import React from 'react';
import logo from './logo.svg';
import './App.css';
import './library.css'
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
import Footer from './components/Footer';
import Getintouch from './components/Getintouch';
import SpecialOfffer from './components/SpecialOffer';
import ServiceContainer from './components/ServiceContainer';

function App() {
  return (
    <div className="App column">
      <Navbar></Navbar>
      <Menubar></Menubar>
      <SpecialOfffer></SpecialOfffer>
      <ServiceContainer></ServiceContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
