import React, { Component } from 'react'
import SpecialOfffer from './../components/SpecialOffer';
import ServiceContainer from './../components/ServiceContainer';
import RecentDeal from './../components/RecentDeal';
import BestDeal from './../components/BestDeal';
import PopularDeal from './../components/PopularDeal';
import ReferCard from './../cardcompoents/ReferCard'



export default class HomePage extends Component {
  
    render() {
        
        return (
           <React.Fragment>
               
                <SpecialOfffer></SpecialOfffer>
                <ServiceContainer></ServiceContainer>
                <ReferCard></ReferCard>
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