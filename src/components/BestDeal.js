import React, { Component } from 'react'
import './bestdeal.css'
import Button from './Button'
export default class BestDeal extends Component {
    render() {
        return (
            <div className="best-deal">
                <div className="container row justify-space-between align-center padding-30" style={{position:'relative'}}>
                    <img alt="best-deal" src="http://staging.classibazaar.com.au/assets/uploads/slider/d7855e7c35cbc4a361689ec1523d4f41.jpg"></img>
                    <div className="column" style={{position:'absolute',right:'6%'}}>
                        <span style={{color:'#999',fontSize:'14px'}}>Most Best Deals</span>
                        <span className="title">Modern Beautiful Furniture</span>
                        <Button text="View All" width="max-content"></Button>
                    </div>
                </div>
            </div>
        )
    }
}
