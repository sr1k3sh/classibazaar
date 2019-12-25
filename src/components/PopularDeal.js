import React, { Component } from 'react'
import './populardeal.css'
import RecentCard from '../cardcompoents/RecentCard'
export default class PopularDeal extends Component {
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
                        items: result.popular_deals
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
      
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="popular-deal">
                    <div className="container column justify-center align-center padding-30" style={{position:'relative'}}>
                        <span className="main-title margin-bottom-30" style={{color:'#333'}}>Popular Deals</span>
                        <div className="row justify-space-between">
                             {items.map(item=>(
                                    <RecentCard key={item.id} image={item.image} dealstitle={item.dealstitle} subtitle={item.subtitle} fake={item.fake} product_price={item.product_price} discount={item.discount} actual_price={item.actual_price} image={item.image.image_name}></RecentCard>
                                ))}
                        
                        </div>
                    </div>
                </div>
            )
        }
    }
}
