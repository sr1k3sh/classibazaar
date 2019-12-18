import React from 'react';
import logo from './logo.svg';
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
            {/* <Route path="/list" exact component={Listpage}></Route> */}
          
        </Router>
        <NewsLetter></NewsLetter>
                <Getintouch></Getintouch>
        {/* <HomePage></HomePage> */}
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
