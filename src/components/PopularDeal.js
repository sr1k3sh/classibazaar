import React, { Component } from 'react'
import './populardeal.css'
import RecentCard from '../cardcompoents/RecentCard'
import { connect } from 'react-redux';
import { fetch_popular_deals } from '../action/PopularDealAction';
class PopularDeal extends Component {
  
    componentDidMount() {
       this.props.dispatch(fetch_popular_deals())
    }
    render() {
        const { error, loading, popular } = this.props;
      
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
            
            return (
                
                <div className="popular-deal">
                    <div className="container column justify-center align-center padding-30" style={{position:'relative'}}>
                        <span className="main-title margin-bottom-30" style={{color:'#333'}}>Popular Deals</span>
                        <div className="row justify-space-between">
                             {popular.map(item=>(
                                    <RecentCard key={item.id} image={item.image.thumbnail} dealstitle={item.dealstitle} subtitle={item.subtitle} fake={item.fake} product_price={item.product_price} discount={item.discount} actual_price={item.actual_price} ></RecentCard>
                                ))}
                        
                        </div>
                    </div>
                </div>
            )
        }
    }
}
function mapStateToProps(state){
    // console.log(state.popular)
    return({
        popular: state.popular.popular,
        loading: state.popular.loading,
        error: state.popular.error
    })
}
export default connect(mapStateToProps)(PopularDeal)