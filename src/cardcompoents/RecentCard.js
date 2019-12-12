import React, { Component } from 'react'
import './recentcard.css'
import Button from '../components/Button'
import Heart from '../IconsComponents/Heart'
export default class RecentCard extends Component {
    render() {
        return (
            <div className="recent-card column">
                <div className="img-card">
                    <div className="discount-circle row justify-center align-center">
                        <span>25%</span>
                    </div>
                    <div className="column recent-offer" style={{padding:10}}>
                                <span style={{background:'#40b866',color:"#fff",fontSize:'11px',width:'max-content',padding:'2px 4px'}}>10 + bought</span>   
                    </div>
                </div>
                <div className="padding-10" style={{borderLeft:"4px solid #40b866"}}>
                    <span className="title" >Atractive Furniture</span>
                </div>
                <div className="padding-10 row justify-space-between">
                    <span className="title color-primary">-25%</span>
                    <div className="row justify-space-between align-center">
                        <span style={{fontSize:'12px',textDecoration:'line-through'}}>40</span>
                        <span className="title bold">$30</span>
                    </div>
                </div>
                <div className="padding-10 row justify-space-between">
                    <span style={{fontSize:"12px"}} className="bold">Atractive Furniture...</span>
                    <Heart></Heart>
                </div>
                <div className="padding-10 row align-center justify-space-between" style={{background:'#f7f8fa',borderTop:'1px solid #ededed'}}>
                    <div>
                        <img width="12px" src="./images/clock.svg" alt='clock'></img>
                        <span style={{fontSize:"12px"}}>41d 4h Remaning</span>
                    </div>
                    <Button text="View Detail"></Button>
                </div>
            </div>
        )
    }
}
