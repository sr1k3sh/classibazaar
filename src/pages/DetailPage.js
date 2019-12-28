import React, { Component } from 'react'
import './detailpage.css'
import BreadCrumb from '../components/BreadCrumb'
import Heart from '../IconsComponents/Heart'
import Button from '../components/Button'
import Facebook from './../IconsComponents/Facebook'
import Google from './../IconsComponents/Google'
import Instagram from './../IconsComponents/Instagram'
import Twitter from './../IconsComponents/Twitter'
import Youtube from './../IconsComponents/Youtube'
import GoogleMapReact from 'google-map-react'
export default class DetailPage extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        return (
            <div className="detail-page">
                <div className="container column justify-space-between">
                    <BreadCrumb crumb={this.props.crumb}></BreadCrumb>
                    <div className="detail-title">
                        <span className="bolder title">Atractive furnitures</span>
                    </div>
                    <div className="detail-sub-title">
                        <span>Atractive furnitures</span>
                    </div>
                    <div className="row justify-space-between">
                        <div className="detail-left-container">
                            
                                <div className="img-card">
                                    <div class="overflow-hidden background-img">    
                                        <img src="http:\/\/staging.classibazaar.com.au\/assets\/uploads\/deals\/thumb\/2962c3d7d9aff85240bd69e45b1b655b_thumb.jpg" alt="deatail images"></img>
                                    </div>
                                </div>
                           
                        </div>
                        <div className="detail-right-container">
                            <div className="selector-container column">
                                <div className="selector-title row justify-space-between">
                                    <span style={{ background: '#40b866', color: "#fff", fontSize: '11px', width: 'max-content', padding: '2px 4px' }}>10 + bought</span>
                                    <Heart></Heart>
                                </div>
                                <div className="column ">
                                    <div className="selector row justify-space-around">
                                        
                                        <span className="bold"><input type="radio" name="site_name"
                                            value='{result.SITE_NAME}'
                                        /> ABC ON SALE</span>
                                        <span className="bold primary-color">25% OFF</span>
                                        <div><span style={{fontSize:'12px',textDecoration:'line-through'}}>40 </span><span className="bold">$ 30</span></div>
                                    </div>
                                    <div className="selector row justify-space-around">

                                        <span className="bold"><input type="radio" name="site_name"
                                            value='{result.SITE_NAME}'
                                        /> ABC ON SALE</span>
                                        <span className="bold primary-color"> 25% OFF</span>
                                        <div><span style={{ fontSize: '12px', textDecoration: 'line-through' }}>40  </span><span className="bold">$ 30</span></div>
                                    </div>
                                    
                                </div>
                                <div className="limited-offer column align-center justify-center" >
                                    <span>Limited time remaining</span>
                                    <span className="bold">180d 15h 3m 20s</span>
                                </div>
                                <div className="column justify-space-around" style={{height:'100px'}}>
                                    <Button text="Continue to Checkout" width="100%" padding="10px 0px"></Button>
                                    <Button text="give as Gift" width='100%' padding="10px 0px"></Button>
                                </div>
                                <div className="column justify-space-around">
                                    <div className="share-title">
                                        <span className="bold">Share this on</span>
                                    </div>    
                                    <div className="row justify-space-around">
                                        <div className="share-icon">
                                            <div className="s-icon facebook">
                                                <Facebook fill="#6a6f7b"></Facebook>
                                            </div>
                                        </div>
                                        <div className="share-icon">
                                            <div className="s-icon google">
                                                <Google fill="#6a6f7b"/>
                                            </div>
                                        </div>
                                        <div className="share-icon">
                                            <div className="s-icon instagram">
                                                <Instagram fill="#6a6f7b"/>
                                            </div>
                                        </div>
                                        <div className="share-icon">
                                            <div className="s-icon twitter">
                                                <Twitter fill="#6a6f7b"/>
                                            </div>
                                        </div>
                                        <div className="share-icon ">
                                            <div className="s-icon youtube">
                                                <Youtube fill="#6a6f7b"/>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:'100%',height:'400px',padding:'10px'}}>
                        <GoogleMapReact defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}></GoogleMapReact>
                    </div>
                </div>
                
            </div>
        )
    }
}
