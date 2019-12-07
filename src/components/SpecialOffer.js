import React, { Component } from 'react'
import './specialoffer.css'
import Button from './Button'

export default class SpecialOfffer extends Component {
    render() {
        return (
            <div className="special-offer">
                <div className="container row align-center justify-space-between"> 
                    <div className="img-holder"></div>
                    <div className="offer-details column"  style={{width:'40%'}}>
                        <div className="row align-center justify-space-between">
                            <span className="title">Atractive Furniture</span>
                            <img width="18" src="./images/heart.svg"></img>
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
                                <span style={{background:'#40b866',color:"#fff",fontSize:'11px',width:'fit-content',padding:'2px 4px'}}>10 + bought</span>
                               
                            </div>
                            
                        </div>
                        <Button text="View Detail" width="fit-content"></Button>
                    </div>
                </div>
            </div>
        )
    }
}
