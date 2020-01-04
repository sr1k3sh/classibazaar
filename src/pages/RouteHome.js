import React, { Component } from 'react'
import Navbar from './../components/Navbar'
import Menubar from './../components/Menubar'

import NewsLetter from './../components/Newsletter'
import Getintouch from './../components/Getintouch'
import Footer from './../components/Footer'

export default class RouteHome extends Component {
    render() {
        return (
            <React.Fragment>
               
                <Navbar></Navbar>
                <Menubar></Menubar>
               
                {this.props.children}
                {/* <ReferCard></ReferCard> */}

                <NewsLetter></NewsLetter>
                <Getintouch></Getintouch>
                <Footer></Footer>

            </React.Fragment>
                
        )
    }
}
