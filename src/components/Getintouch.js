import React, { Component } from 'react'
import './getintouch.css'

import Facebook from '../IconsComponents/Facebook'
import Twitter from '../IconsComponents/Twitter'
import Instagram from '../IconsComponents/Instagram'
import Youtube from '../IconsComponents/Youtube'
import Google from '../IconsComponents/Google'
export default class Getintouch extends Component {
    render() {
        return (
            <div className="get-in-touch">
                <div className='container column align-center justify-center padding-50'>
                    <span className="main-title margin-bottom-30" style={{textTransform:'uppercase',color:'#fff'}}>get in touch</span>
                    <div className="row justify-space-between" style={{width:'40%'}}>
                        <div className="touch-icon">
                            {/* <img width="100%" src="./images/facebook-logo.svg"></img> */}
                            <Facebook fill="#fff"></Facebook>
                        </div>
                        <div className="touch-icon">
                            <Twitter fill="#fff"></Twitter>     
                        </div>
                        <div className="touch-icon">
                            <Instagram fill="#fff"></Instagram>
                        </div>
                        <div className="touch-icon">
                            <Youtube fill="#fff"></Youtube>
                        </div>
                        <div className="touch-icon">
                            <Google fill="#fff"></Google>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
