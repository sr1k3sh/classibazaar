import React, { Component } from 'react'
import './specialoffer.css'
import Button from './Button'
import Heart from '../IconsComponents/Heart'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetch_featured_deals } from './../action/ProductActions'
class SpecialOfffer extends Component {
  
    componentDidMount() {
        this.props.dispatch(fetch_featured_deals());
    }
    render() {
        const { error, loading, products } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
            console.log(products)
            return (
              

                <div className="special-offer">
                    <div className="container row align-center justify-space-between">
                        <div className="img-holder">
                            <div className="img-card">
                                <div class="overflow-hidden background-img">
                                    {
                                        products.map(item=>(
                                            <img key={item.id} src={item.image.image_name} alt="image"></img>
                                        ))
                                  }
                                </div>
                            </div>
                            <img className="offer-tag" src="./images/tag.svg" alt="offer"></img>
                            <div className="row align-center" style={{
                                background: '#e51d28', width: 'fit-content', padding: '2px 10px', position: 'absolute', top: '10px', right: '10px', borderRadius: '4px',
                                boxShadow: '-1px 3px 7px 0px #d43838'
                            }}>
                                <span className="normal-font" style={{ marginRight: '10px', color: '#fff' }}>| </span>
                                <img style={{ marginRight: '10px' }} width="14px" src="./images/clock.svg" alt="clock" />
                                {products.map(item=>(
                                    
                                    <span className="normal-font" style={{ color: "#fff" }}>
                                        {
                                            49    
                                        } days remaining
                                    </span>
                                ))}
                            </div>
                        </div>
                        {products.map(item => (
                        <div className="offer-details column">
                            <div className="row align-center justify-space-between">
                             
                                
                                    <span className="title" key={item.id}>
                                        {item.dealstitle}
                                    </span>
                   
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
function mapStateToProps(state){
    return({ 
        products: state.products.items,
        loading: state.products.loading,
        error: state.products.error
    })
}
export default connect(mapStateToProps)(SpecialOfffer);
