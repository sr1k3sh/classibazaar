import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Listpage from './../pages/Listpage'
import DetailPage from './../pages/DetailPage'
import { connect } from 'react-redux'
import { fetch_total_product } from '../action/TotalProductAction'
import RecentCard from '../cardcompoents/RecentCard'
import RouteHome from './RouteHome'
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
            return (
               <React.Fragment>
                    {/* {/* <Route path='/home' component={HomePage} /> */}
                    {/* <Route path='/home' component={HomePage} /> */}
                    
                    <Route path='/shopping' component={() =><RouteHome>
                        
                        <Listpage crumb="shopping">
                            {item.map(val => (
                                <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                            ))}
                        </Listpage>
                    </RouteHome> } />
                    <Route path={`/Holiday-&-Travel`} component={() => 
                        <RouteHome>
                            <Listpage crumb="Holiday & Travel">
                                {item.map(val => (
                                    <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                                ))}
                            </Listpage> 
                        </RouteHome>
                    } />
                    <Route path={`/Health-&-Beauty`} component={() =><RouteHome>
                        <Listpage crumb="Health & Beauty">
                            {item.map(val => (
                                <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                            ))}
                        </Listpage>
                    </RouteHome> } />
                    <Route path={`/Restaurant-&-Food`} component={() =><RouteHome>
                        <Listpage crumb="Restaurant & Food">
                            {item.map(val => (
                                <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                            ))}
                        </Listpage>
                    </RouteHome> } />
                    <Route path={`/Things-to-do`} component={() =><RouteHome>
                        <Listpage crumb="Things to do">
                            {item.map(val => (
                                <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                            ))}
                        </Listpage>
                    </RouteHome> } />
                    <Route path={`/Services`} component={() =><RouteHome>
                        <Listpage crumb="services">
                            {item.map(val => (
                                <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                            ))}
                        </Listpage>
                    </RouteHome> } />        
                    <Route path='/detail-page' component={() =><RouteHome>
                        <DetailPage crumb="detail-page"></DetailPage>
                    </RouteHome> } />
                    <Route path='/products' component={() =><RouteHome>
                        <Listpage crumb="products">
                            {item.map(val => (
                                <RecentCard key={val.id} image={val.image.thumbnail} discount={val.discount} fake={val.fake} dealstitle={val.dealstitle} product_price={val.product_price} actual_price={val.actual_price} subtitle={val.subtitle}></RecentCard>
                            ))}
                        </Listpage>
                    </RouteHome> } />
    
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