import React, { Component } from 'react'
import './servicecard.css'
export default class ServiceCard extends Component {
    // constructor(){
    //     super();
    // }
    render() {
        return (
            <div className="service-card row space-around align-center" style={{...this.props.style}}>
                {/* <img width="45px" src={this.props.src}></img> */}
                {this.props.children}
                <div className="column">
                    <span className="service-title">{this.props.title}</span>
                    <span style={{fontWeight:'normal',color:'#8b8b8b'}}>{this.props.details}</span>
                </div>
            </div>
        )
    }
}
