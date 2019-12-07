import React, { Component } from 'react'
import './servicecontainer.css'
import ServiceCard from '../cardcompoents/ServiceCard'
export default class ServiceContainer extends Component {
    render() {
        return (
            <div className="service-container">
                <div className="container row align-center justify-space-between">
                    <ServiceCard src="./images/truck.svg" title="Free World Delivery" details="Orders Over $100"></ServiceCard>
                    <ServiceCard src="./images/helpline.svg" title="Online 24/7 Support" details="Sign up for Gift"></ServiceCard>
                    <ServiceCard src="./images/money-bag.svg" title="Money Back Guarantee" details="Sign up for Gift"></ServiceCard>
                    <ServiceCard src="./images/piggy-bank.svg" title="Win $100 First Purchase" details="Sign up for Voucher"></ServiceCard>
                </div>
            </div>
        )
    }
}
