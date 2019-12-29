import React, { Component } from 'react'
import './navbar.css'
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import { Link, Route } from 'react-router-dom';
import $ from 'jquery'
import DropDown from '../cardcompoents/DropDown';
import Listpage from '../pages/Listpage';
export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
            location:'Australia'
        }
    }
    componentDidMount(){
        $('.city-dropdown').click(_=>{
            $('.dropdown').slideDown()
            // $('.dropdown').slideToggle()
        })
       
    }
    handleSearch=()=>{
        console.log('searched')
    }
    render() {
       
        return (
            <div className="navbar">
                <div className="container row justify-space-between align-center">
                    <Link to='/'>
                        <div className="logo">
                            <ProvideMediaMatchers>
                                <MediaMatcher
                                mobile={
                                    <img src="./images/new-mobile-logo.png" alt="mobile"></img>
                                }
                                desktop={
                                    <img src="./images/classi-logo.png" alt="desktop"></img>
                                }
                                />

                            </ProvideMediaMatchers>
                            
                        </div>
                    </Link>
                    <div className="navbar-right"> 
                        <div className="search-bar row align-center justify-space-around">
                            <div className="left-div">
                                <form className="row">
                                    <input placeholder="search all products here..."></input>

                                    <div className="search-button" onClick={this.handleSearch}><Link to="/products"><span>search</span></Link></div>
                                </form>
                            </div>
                            <div className="right-div row justify-space-around align-center" style={{width:'100%'}}>
                                <div className="row align-center">
                                    <img style={{marginRight:'4px'}} width="14px" src="./images/user.svg" alt="login icons"/>
                                    <span style={{color:'#fff'}}>Login</span>
                                </div>
                                <div className=" city-dropdown row align-center">
                                    {/* <img width="14px" src="./images/map-pin.svg" alt="login icons"/>
                            <span  style={{color:'#fff',marginRight:'4px'}}>{this.state.location}</span>
                                    <img width="14px" src="./images/chevron-down.svg" alt="menu"></img> */}
                                    <DropDown></DropDown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
