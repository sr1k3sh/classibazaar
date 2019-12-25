import React, { Component } from 'react'
import SpecialOfffer from './../components/SpecialOffer';
import ServiceContainer from './../components/ServiceContainer';
import RecentDeal from './../components/RecentDeal';
import BestDeal from './../components/BestDeal';
import PopularDeal from './../components/PopularDeal';
import { getHomeData } from './../action/index'
import { connect } from 'react-redux'


export default class HomePage extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        fetch('http://staging.classibazaar.com.au/api/deal/home?fbclid=IwAR3MT99zCT2Hp1D1mCYEL29B8e3HqpulWcgOtOp3oP-MUNf02sX0ZR5enEw')
        .then(response=>response.json())
        .then(json => {
            this.setState({data:json})
        })
    }
    render() {
        
        return (
           <React.Fragment>
                <SpecialOfffer></SpecialOfffer>
                <ServiceContainer></ServiceContainer>
                <RecentDeal></RecentDeal>
                <BestDeal></BestDeal>
                <PopularDeal></PopularDeal>
                      
           </React.Fragment>
        )
    }
}
// function mapStateToProps(state) {
//     console.log(state.home)
//     return {
//         data: state

//     }
// }
// export default connect(mapStateToProps, { getHomeData })(HomePage);