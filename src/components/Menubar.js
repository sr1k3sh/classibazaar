import React, { Component } from 'react'
import './menubar.css'
export default class Menubar extends Component {
    render() {
        return (
            <div className="menubar">
                <div className="container row justify-space-between" style={{justifyContent:'left',alignItems:'left'}}>
                    <span>Holiday & Travel</span>
                    <span>Things to do</span>
                    <span>Heath & Beauty</span>
                    <span>Restaurant & Food</span>
                    <span>Shopping</span>
                    <span>Services</span>
                </div>
            </div>
        )
    }
}
