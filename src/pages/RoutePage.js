import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomePage from './../pages/HomePage'
import Listpage from './../pages/Listpage'
import DetailPage from './../pages/DetailPage'
import { connect } from 'react-redux'
import { fetch_total_product } from '../action/TotalProductAction'
import RecentCard from '../cardcompoents/RecentCard'
class RoutePage extends Component {
    componentDidMount(){
        this.props.dispatch(fetch_total_product())
        // console.log(this.props)
    }
    render() {
        const {loading,error,item}=this.props
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
            console.log(item)
            return (
               <React.Fragment>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shopping' component={() => <Listpage crumb="shopping">
                        {item.map(val => (
                            <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                        ))}
                    </Listpage>} />
                    <Route path={`/Holiday-&-Travel`} component={() => <Listpage crumb="Holiday & Travel">
                        {item.map(val => (
                            <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                        ))}
                    </Listpage>} />
                    <Route path={`/Health-&-Beauty`} component={() => <Listpage crumb="Health & Beauty">
                        {item.map(val => (
                            <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                        ))}
                    </Listpage>} />
                    <Route path={`/Restaurant-&-Food`} component={() => <Listpage crumb="Restaurant & Food">
                        {item.map(val => (
                            <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                        ))}
                    </Listpage>} />
                    <Route path={`/Things-to-do`} component={() => <Listpage crumb="Things to do">
                        {item.map(val => (
                            <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                        ))}
                    </Listpage>} />
                    <Route path={`/Services`} component={() => <Listpage crumb="services">
                        {item.map(val => (
                            <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                        ))}
                    </Listpage>} />        
                    <Route path='/detail-page' component={() => <DetailPage crumb="detail-page"></DetailPage>} />
                    <Route path='/products' component={() => <Listpage crumb="products">
                        {item.map(val=>(
                            <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                        ))}
                    </Listpage>} />
    
               </React.Fragment>
            )

        }
    }
}
function mapStateToProps(state){
    
    return({
        item: state.total_products.items,
        loading:state.total_products.loading,
        error:state.total_products.error
    })
}
export default connect(mapStateToProps)(RoutePage); 