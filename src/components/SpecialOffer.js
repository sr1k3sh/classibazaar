import React, { Component } from 'react'
import './specialoffer.css'
import Button from './Button'
import Heart from '../IconsComponents/Heart'
export default class SpecialOfffer extends Component {
    render() {
        return (
            <div className="special-offer">
                <div className="container row align-center justify-space-between" style={{boxShadow:'1px 1px 1px 1px #eee'}}> 
                    <div className="img-holder">
                        <img src="./images/offer-banner-img.png" alt="offer"></img>
                        <div className="row align-center" style={{background:'#e51d28',width:'fit-content',padding:'2px 10px',position:'absolute',top:'10px',right:'10px'}}>
                            <span className="normal-font" style={{marginRight:'10px',color:'#fff'}}>| </span> 
                            <img style={{marginRight:'10px'}} width="14px" src="./images/clock.svg" alt="clock"/>
                            <span className="normal-font" style={{color:"#fff"}}> 41d 9h Remaning</span>
                        </div>
                    </div>
                    <div className="offer-details column">
                        <div className="row align-center justify-space-between">
                            <span className="title">Atractive Furniture</span>
                            <Heart></Heart>
                        </div>
                        <div className="row align-center" style={{marginBottom:'12px'}}>
                            <span>Atractive Furnitures</span>
                        </div>
                        <div className="row align-center">
                            <div className="price-point column">
                                <span className="normal-font bold">FROM</span>
                                <span className="price-font bolder">$40</span>
                            </div>
                            <div className="column" style={{padding:10}}>
                                <span style={{fontSize:'12px',lineHeight:'2'}}>VALUED FROM $30</span>
                                <span className="normal-font" style={{color:'#40b866'}}>SAVE UPTO 25% OFF</span>
                                <span style={{background:'#40b866',color:"#fff",fontSize:'11px',width:'max-content',padding:'2px 4px'}}>10 + bought</span>
                               
                            </div>
                            
                        </div>
                        <Button text="View Detail" width="100px"></Button>
                    </div>
                </div>
            </div>
        )
    }
}
