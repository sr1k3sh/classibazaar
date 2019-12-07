import React, { Component } from 'react'
import './populardeal.css'
import RecentCard from '../cardcompoents/RecentCard'
export default class PopularDeal extends Component {
    render() {
        return (
            <div className="popular-deal">
                <div className="container column justify-center align-center padding-30" style={{position:'relative'}}>
                    <span className="main-title margin-bottom-30" style={{color:'#333'}}>Popular Deals</span>
                    <div className="row justify-space-between">
                        <RecentCard></RecentCard>
                        <RecentCard></RecentCard>
                        <RecentCard></RecentCard>
                    </div>
                </div>
            </div>
        )
    }
}
