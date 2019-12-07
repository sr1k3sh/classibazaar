import React, { Component } from 'react'
import './footer.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Getintouch from './Getintouch'
export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="footer">
                <div className="container column align-center justify-center">                   
                    <div>
                        <img className="footer-logo" src="./images/classi-logo.png" alt="footer icon"></img>
                    </div>
                    <div className="footer-links container justify-space-around column align-center">
                        <Router>
                            <ul>
                                <li><Link to="/">contact</Link></li>
                                <li><Link to="/">Listing Policy</Link></li>
                                <li><Link to="/">Terms of Use</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Cookie Policy</Link></li>
                            </ul>   
                        </Router>
                        <div>
                            <span style={{color:'#fff',fontSize:'12px'}}>2019 All Rights Reserved © ClassiBazaar</span>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
           
        )
    }
}
