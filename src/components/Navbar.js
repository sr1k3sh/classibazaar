import React, { Component } from 'react'
import './navbar.css'
import { func } from 'prop-types';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
export default class Navbar extends Component {
    
    render() {
        return (
            <div className="navbar">
                <div className="container row justify-space-between align-center">
                    <div className="logo">
                        <ProvideMediaMatchers>
                            <MediaMatcher
                            mobile={
                                <img src="./images/new-mobile-logo.png"></img>
                            }
                            desktop={
                                <img src="./images/classi-logo.png"></img>
                            }
                            />

                        </ProvideMediaMatchers>
                        
                    </div>
                    <div className="navbar-right" style={{width:'50%'}}> 
                        <div className="search-bar row align-center justify-space-around">
                            <div className="left-div">
                                <form className="row">
                                    <input placeholder="search all products here..."></input>
                                    <div className="search-button"><span>search</span></div>
                                </form>
                            </div>
                            <div className="right-div row justify-space-around align-center" style={{width:'100%'}}>
                                <div className="row align-center">
                                    <img style={{marginRight:'4px'}} width="14px" src="./images/user.svg" alt="login icons"/>
                                    <span style={{color:'#fff'}}>Login</span>
                                </div>
                                <div className="row align-center">
                                    <img width="14px" src="./images/map-pin.svg" alt="login icons"/>
                                    <span style={{color:'#fff',marginRight:'4px'}}>Australia</span>
                                    <img width="14px" src="./images/chevron-down.svg" alt="menu"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
