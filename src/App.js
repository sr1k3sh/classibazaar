import React from 'react';

import './App.css';
import './library.css';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
import Footer from './components/Footer';
import NewsLetter from './components/Newsletter';
import Getintouch from './components/Getintouch';
import {Provider} from 'react-redux'
import store from './store/index'

import { HashRouter as Router } from 'react-router-dom';
import ReferCard from './cardcompoents/ReferCard';
import RoutePage from './pages/RoutePage';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App column">
        <Router>
            <Navbar></Navbar>
            <Menubar></Menubar>
         
            <RoutePage></RoutePage>
            <ReferCard></ReferCard>
        </Router>
        <NewsLetter></NewsLetter>
                <Getintouch></Getintouch>
    
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
