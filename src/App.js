import React from 'react';
import './App.css';
import './library.css';
import {Provider} from 'react-redux'
import store from './store/index'
import {HashRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import RouteHome from './pages/RouteHome';
import Login from './pages/Login';
import RoutePage from './pages/RoutePage';
import HomePage from './pages/HomePage';
class App extends React.Component {
  componentDidMount(){}
  render(){

    return (
      <Provider store={store}>
       
          {/* <Route path="/login" component={()=><Login></Login>}></Route> */}
          
          <div className="App home column">
            <BrowserRouter>
                <Route exact path="/" component={()=><RouteHome>
                  <HomePage></HomePage>
                </RouteHome>}/>
                <Route path="/login" component={Login}></Route>
                <RoutePage></RoutePage>
            </BrowserRouter>
              
          </div>
        
        
      </Provider>
    );
  }
}

export default App;
