import React, { Component } from 'react'
import './breadcrumb.css'
export default class BreadCrumb extends Component {
    render() {
        return (
            <div className="bread-crumb ">
                <div className="container row justify-start padding-10">
                    <div className="bread">
                        <span style={{color:'blue'}}>Home></span><span>{this.props.crumb}></span>
                    </div>
                </div>
            </div>
        )
    }
}
