import React, { Component } from 'react'
import SpecialOfffer from './../components/SpecialOffer';
import ServiceContainer from './../components/ServiceContainer';
import RecentDeal from './../components/RecentDeal';
import BestDeal from './../components/BestDeal';
import PopularDeal from './../components/PopularDeal';

import LearnRedux from './../components/LearnRedux';
export default class HomePage extends Component {
    render() {
        return (
           <React.Fragment>
                <SpecialOfffer></SpecialOfffer>
                <ServiceContainer></ServiceContainer>
                <RecentDeal></RecentDeal>
                <BestDeal></BestDeal>
                <PopularDeal></PopularDeal>
                {/* <LearnRedux></LearnRedux> */}
               
           </React.Fragment>
        )
    }
}
