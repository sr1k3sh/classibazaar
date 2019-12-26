import React, { Component } from 'react'
import './recentdeal.css'
import RecentCard from '../cardcompoents/RecentCard'
import { fetch_recent_deals } from './../action/ProductActions'
import { connect } from 'react-redux';

class RecentDeal extends Component {
   
    componentDidMount() {
        this.props.dispatch(fetch_recent_deals());
        
    }
    render() {
        const { error, loading, products } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
                
                return (
                    <div className="recent-deal">
                        <div className="container column justify-center align-center padding-30" style={{position:'relative'}}>
                            
                                <span className="main-title margin-bottom-30">Recent Deals</span>
                            
                            <div className="row justify-space-between">
                                {products.map(item=>(
                                    <RecentCard key={item.id} dealstitle={item.dealstitle} subtitle={item.subtitle} fake={item.fake} product_price={item.product_price} discount={item.discount} actual_price={item.actual_price} image={item.image.image_name}></RecentCard>
                                ))}
                             
                            </div>
                        </div>
                    </div>
                )
        }
    }
}
function mapStateToProps(state){
   
    return ({
        products: state.products.items,
        loading: state.products.loading,
        error: state.products.error
    })
}
export default connect(mapStateToProps)(RecentDeal)
