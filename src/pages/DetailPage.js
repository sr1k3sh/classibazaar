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
import DateCountdown from 'react-date-countdown-timer'
import { connect } from 'react-redux'
import {fetch_details} from './../action/DetailPageAction'
class DetailPage extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
   

   
    componentDidMount(){
        this.props.dispatch(fetch_details())
    }

    render() {
        const {deals,image,products,loading,error}=this.props
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else { 
            console.log(image)
            return (
                <div className="detail-page">
                    <div className="container column justify-space-between">
                        <BreadCrumb crumb={this.props.crumb}></BreadCrumb>
                            <div className="detail-title">
                            <span className="bolder title">{deals.dealstitle}</span>
                        </div>
                        <div className="detail-sub-title">
                            <span>{deals.subtitle}</span>
                        </div>
                        <div className="row justify-space-between">
                            <div className="detail-left-container">
                                
                                    <div className="img-card">
                                        <div class="overflow-hidden background-img">    
                                            <img src={image.thumbnail} alt="deatail images"></img>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p>{deals.description}
                                        </p>
                                    </div>
                            
                            </div>
                            <div className="detail-right-container">
                                <div className="selector-container column">
                                    <div className="selector-title row justify-space-between">
                                        <span style={{ background: '#40b866', color: "#fff", fontSize: '11px', width: 'max-content', padding: '2px 4px' }}>{deals.fake} + bought</span>
                                        <Heart></Heart>
                                    </div>
                                    <div className="column">
                                       
                                            {
                                            products.map(product=>(
                                                <div key={product.id} className="selector row justify-space-around">
                                                    <span className="bold"><input type="radio" name="site_name"
                                                        value='{result.SITE_NAME}'
                                                    /> {product.product_name}</span>
                                                    <span className="bold primary-color">{product.discount}% OFF</span>
                                            <div><span style={{fontSize:'12px',textDecoration:'line-through'}}>$ {product.product_price} </span><span className="bold">$ {product.price_after_discount}</span></div>
                                                </div>

                                            ))}
                                    </div>
                                    <div className="limited-offer column align-center justify-center" >
                                        <span class="bold">Limited time remaining</span>
                                        <DateCountdown mostSignificantFigure='day' locales_plural={['years', 'months', 'Days', 'Hours', 'Minutes', 'Seconds']} numberOfFigures="4" dateTo='January 01, 2023 00:00:00 GMT+03:00'></DateCountdown>
                                        {/* <span className="bold">180d 15h 3m 20s</span> */}
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
                        {/* <div style={{width:'100%',height:'400px',padding:'10px'}}>
                            <GoogleMapReact defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}></GoogleMapReact>
                        </div> */}
                    </div>
                    
                </div>
            )
        }
    }
}
function mapStateToProps(state){
    // console.log(state.details)
    return({
        deals:state.details.deals,
        image:state.details.image,
        products:state.details.products,
        loading:state.details.loading,
        error:state.details.error
    })
}
export default connect(mapStateToProps)(DetailPage)