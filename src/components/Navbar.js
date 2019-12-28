import React, { Component } from 'react'
import './navbar.css'
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
            location:'Australia'
        }
    }
    componentDidMount(){
        // $('.city-dropdown').click(_=>{
        //     $('.dropdown').slideToggle()
        // })
       
    }

    render() {
        const friendOptions = [
            {
                key: 'Jenny Hess',
                text: 'Jenny Hess',
                value: 'Jenny Hess',
                image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
            },
            {
                key: 'Elliot Fu',
                text: 'Elliot Fu',
                value: 'Elliot Fu',
                image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
            },
            {
                key: 'Stevie Feliciano',
                text: 'Stevie Feliciano',
                value: 'Stevie Feliciano',
                image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
            },
            {
                key: 'Christian',
                text: 'Christian',
                value: 'Christian',
                image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
            },
            {
                key: 'Matt',
                text: 'Matt',
                value: 'Matt',
                image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
            },
            {
                key: 'Justen Kitsune',
                text: 'Justen Kitsune',
                value: 'Justen Kitsune',
                image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
            },
        ]
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
                                    <div className="search-button"><span>search</span></div>
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
                                    <Dropdown 
                                    placeholder='Select Friend'
                                        fluid
                                        selection options={friendOptions}></Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
