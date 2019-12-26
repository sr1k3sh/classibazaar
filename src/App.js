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
import HomePage from './pages/HomePage';
import Listpage from './pages/Listpage'
import { HashRouter as Router, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ReferCard from './cardcompoents/ReferCard';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App column">
        <Router>
            <Navbar></Navbar>
            <Menubar></Menubar>
         
            <Route exact path='/' component={HomePage}/>
            <Route path='/shopping' component={Listpage}/>
            <Route path='/Holiday-Travel' component={Listpage}/>
            <Route path='/detail-page' component={DetailPage}/>
          
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
