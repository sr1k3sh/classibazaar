import React from 'react';
import logo from './logo.svg';
import './App.css';
import './library.css';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
import Footer from './components/Footer';
import Getintouch from './components/Getintouch';
import SpecialOfffer from './components/SpecialOffer';
import ServiceContainer from './components/ServiceContainer';
import RecentDeal from './components/RecentDeal';
import BestDeal from './components/BestDeal';
import PopularDeal from './components/PopularDeal';
import NewsLetter from './components/Newsletter';

function App() {
  return (
    <div className="App column">
      <Navbar></Navbar>
      <Menubar></Menubar>
      <SpecialOfffer></SpecialOfffer>
      <ServiceContainer></ServiceContainer>
      <RecentDeal></RecentDeal>
      <BestDeal></BestDeal>
      <PopularDeal></PopularDeal>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}

export default App;
