import React, { Component } from 'react'
import './servicecontainer.css'
import Truck from '../IconsComponents/Truck'
import Helpline from '../IconsComponents/Helpline'
import MoneyBag from '../IconsComponents/MoneyBag'
import PiggyBank from '../IconsComponents/PiggyBank'
import ServiceCard from '../cardcompoents/ServiceCard'
export default class ServiceContainer extends Component {
    render() {
        return (
            <div className="service-container">
                <div className="ser-card container row align-center justify-space-between">
                  
                        <ServiceCard style={{height:'50px',overflow:'hidden'}} src="./images/truck.svg" title="Free World Delivery" details="Orders Over $100">
                            <div className="column s-icon">
                                <Truck fill="#000"></Truck>
                                <Truck fill="#e59617"></Truck>
                            </div>
                        </ServiceCard>
                        <ServiceCard style={{height:'50px',overflow:'hidden'}} src="./images/helpline.svg" title="Online 24/7 Support" details="Sign up for Gift">
                            <div className="column s-icon">
                                <Helpline fill="#000"></Helpline>
                                <Helpline fill="#e59617"></Helpline>
                            </div>
                        </ServiceCard>
                   
                        <ServiceCard style={{height:'50px',overflow:'hidden'}} src="./images/money-bag.svg" title="Money Back Guarantee" details="Sign up for Gift">
                            <div className="column s-icon">
                                <MoneyBag fill="#000"></MoneyBag>
                                <MoneyBag fill="#e59617"></MoneyBag>
                            </div>
                        </ServiceCard>
                        <ServiceCard style={{height:'50px',overflow:'hidden'}} src="./images/piggy-bank.svg" title="Win $100 First Purchase" details="Sign up for Voucher">
                            <div className="column s-icon">
                                <PiggyBank fill="#000"></PiggyBank>
                                <PiggyBank fill="#e59617"></PiggyBank>
                            </div>
                        </ServiceCard>
                        
                   
                </div>
            </div>
        )
    }
}
