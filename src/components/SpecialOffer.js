import React, { Component } from 'react'
import './specialoffer.css'
import Button from './Button'
import Heart from '../IconsComponents/Heart'
import { Link } from 'react-router-dom'
export default class SpecialOfffer extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("http://staging.classibazaar.com.au/api/deal/home?fbclid=IwAR3MT99zCT2Hp1D1mCYEL29B8e3HqpulWcgOtOp3oP-MUNf02sX0ZR5enEw")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.featured_deals
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
            

    }
    render() {
        const { error, isLoaded, items } = this.state;
            
            const val = function(){
                const startDate = '2019-11-27';
                const endDate   = '2020-06-26';
                const timeDiff  = (new Date(endDate)) - (new Date(startDate));
                const days      = timeDiff / (1000 * 60 * 60 * 24)
            }
            
     
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="special-offer">
                    <div className="container row align-center justify-space-between">
                        <div className="img-holder">
                            <div className="img-card">
                                <div class="overflow-hidden background-img">
                                    {
                                        items.map(item=>(
                                            <img key={item.id} src={item.image.image_name} alt="image"></img>
                                        ))
                                    /* {this.state.featured_deals.map(item=>{
                                    // <img key={item.id} src={item.image} alt="featured image"></img>
                                
                                })} */}
                                </div>
                            </div>
                            <img className="offer-tag" src="./images/tag.svg" alt="offer"></img>
                            <div className="row align-center" style={{
                                background: '#e51d28', width: 'fit-content', padding: '2px 10px', position: 'absolute', top: '10px', right: '10px', borderRadius: '4px',
                                boxShadow: '-1px 3px 7px 0px #d43838'
                            }}>
                                <span className="normal-font" style={{ marginRight: '10px', color: '#fff' }}>| </span>
                                <img style={{ marginRight: '10px' }} width="14px" src="./images/clock.svg" alt="clock" />
                                {items.map(item=>(
                                    
                                    <span className="normal-font" style={{ color: "#fff" }}>
                                        {
                                            49    
                                        } days remaining
                                    </span>
                                ))}
                            </div>
                        </div>
                        {items.map(item => (
                        <div className="offer-details column">
                            <div className="row align-center justify-space-between">
                                {/* <ul>
                                   
                                </ul> */}
                                
                                    <span className="title" key={item.id}>
                                        {item.dealstitle}
                                    </span>
                               
                                {/* {this.state.featured_deals.map(item => <span key={item.id}>
                                {console.log(item)}
                            </span>)} */}
                                {/* <span className="title">Atractive Furniture</span> */}
                                <Heart></Heart>
                            </div>
                            <div className="row align-center" style={{ marginBottom: '12px' }}>
                                <span key={item.id}>{item.subtitle}</span>
                            </div>
                            <div className="row align-center">
                                <div className="price-point column">
                                    <span className="normal-font bold">FROM</span>
                                        <span className="price-font bolder">${item.product_price}</span>
                                </div>
                                <div className="column" style={{ padding: 10 }}>
                                        <span style={{ fontSize: '12px', lineHeight: '2' }}>VALUED FROM ${item.actual_price}</span>
                                        <span className="normal-font" style={{ color: '#40b866' }}>SAVE UPTO {item.discount}% OFF</span>
                                    <span style={{ background: '#40b866', color: "#fff", fontSize: '11px', width: 'max-content', padding: '2px 4px' }}>10 + bought</span>

                                </div>

                            </div>
                            <Link to='detail-page'>
                                <Button text="View Detail" width="100px"></Button>

                            </Link>
                        </div>
                         ))}
                    </div>
                </div>
            )
    }
        
    }
}
