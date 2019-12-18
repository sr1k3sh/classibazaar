import React, { Component } from 'react'
import './menubar.css'
import HomePage from './../pages/HomePage'
import { HashRouter as Router,Link } from 'react-router-dom'
import Listpage from '../pages/Listpage'
export default class Menubar extends Component {
    render() {
        return (
            <div className="menubar">
                <div className="container row justify-space-between" style={{justifyContent:'left',alignItems:'left'}}>                   
                        <span><Link to="/Holiday-Travel">Holiday & Travel</Link></span>
                        <span><Link to="/Things-to-do">Things to do</Link></span>
                        <span><Link to="/Heath-Beauty">Heath & Beauty</Link></span>
                        <span><Link to="/Restaurant ">Restaurant & Food</Link></span>
                        <span><Link to="/Shopping">Shopping</Link></span>
                        <span><Link to="/Services">Services</Link></span>                   
                </div>
            </div>
        )
    }
}
