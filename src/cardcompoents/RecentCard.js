import React, { Component } from 'react'
import './recentcard.css'
import Button from '../components/Button'
import Heart from '../IconsComponents/Heart'
import { Link } from 'react-router-dom'
export default class RecentCard extends Component {
    render() {
        return (
            <div className="recent-card column">
                <div className="img-card">
                    <div className="overflow-hidden background-img">
                        <img src={this.props.image} alt="recent card"></img>
                    </div>
                    <div className="discount-circle row justify-center align-center">
                        <span>{this.props.discount} %</span>
                    </div>
                    <div className="column recent-offer" style={{padding:10}}>
                                <span style={{background:'#40b866',color:"#fff",fontSize:'11px',width:'max-content',padding:'2px 4px'}}>{this.props.fake} + bought</span>   
                    </div>
                </div>
                <div className="padding-10" style={{borderLeft:"4px solid #40b866"}}>
                    <span className="title" >{this.props.dealstitle}</span>
                </div>
                <div className="padding-10 row justify-space-between">
                    <span className="title color-primary">-{this.props.discount}%</span>
                    <div className="row justify-space-between align-center">
                        <span style={{ fontSize: '12px', textDecoration: 'line-through' }}>{this.props.product_price}</span>
                        <span className="title bold">${this.props.actual_price}</span>
                    </div>
                </div>
                <div className="padding-10 row justify-space-between">
                    <span style={{fontSize:"12px"}} className="bold">{this.props.subtitle}..</span>
                    <Heart></Heart>
                </div>
                <div className="padding-10 row align-center justify-space-between" style={{background:'#f7f8fa',borderTop:'1px solid #ededed'}}>
                    <div>
                        <img width="12px" src="./images/clock.svg" alt='clock'></img>
                        <span style={{fontSize:"12px"}}>41d 4h Remaning</span>
                    </div>
                    <Link to="detail-page">
                        <Button text="View Detail"></Button>
                    </Link>
                </div>
            </div>
        )
    }
}
