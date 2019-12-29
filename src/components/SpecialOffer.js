import React, { Component } from 'react'
import './specialoffer.css'
import Button from './Button'
import Heart from '../IconsComponents/Heart'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetch_featured_deals } from './../action/FeaturedActions'
            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

class SpecialOfffer extends Component {
  
    componentDidMount() {
        this.props.dispatch(fetch_featured_deals());
        
    }
    
    date=(startDate,endDate)=>{
        var date1 = startDate;
        var date2 = endDate;

        // First we split the values to arrays date1[0] is the year, [1] the month and [2] the day
        date1 = date1.split('-');
        date2 = date2.split('-');

        // Now we convert the array to a Date object, which has several helpful methods
        date1 = new Date(date1[0], date1[1], date1[2]);
        date2 = new Date(date2[0], date2[1], date2[2]);

        // We use the getTime() method and get the unixtime (in milliseconds, but we want seconds, therefore we divide it through 1000)
        var date1_unixtime = parseInt(date1.getTime() / 1000);
        var date2_unixtime = parseInt(date2.getTime() / 1000);

        // This is the calculated difference in seconds
        var timeDifference = date2_unixtime - date1_unixtime;

        // in Hours
        var timeDifferenceInHours = timeDifference / 60 / 60;

        // and finaly, in days :)
        var timeDifferenceInDays = timeDifferenceInHours / 24;

        return <span className="normal-font" style={{ color: "#fff" }} >{timeDifferenceInDays} days remaining</span>
    }
    render() {
        const { error, loading, featured } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {   
            

            // const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
           
                  
            return (
              

                <div className="special-offer">
                    <div className="container row align-center justify-space-between">
                        <div className="img-holder">
                            <div className="img-card">
                                <div class="overflow-hidden background-img">
                                    {
                                        featured.map(item=>(
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
                                {featured.map(item=>(
                                    // console.log(item.startDate)
                                     this.date(item.startDate,item.endDate)
                                    // console.log(this.days_between("13/04/2010" - "16/04/2010" ))
                                    // <span className="normal-font" style={{ color: "#fff" }}>
                                    //     {
                                    //      item.startDate-item.endDate   
                                    //     } days remaining
                                    // </span>
                                ))}
                            </div>
                        </div>
                        {featured.map(item => (
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
    return(
        {    
            featured: state.featured.features,
            loading: state.featured.loading,
            error: state.featured.error
        }
    )
}
export default connect(mapStateToProps)(SpecialOfffer);
