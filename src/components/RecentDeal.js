import React, { Component } from 'react'
import './recentdeal.css'
import RecentCard from '../cardcompoents/RecentCard'
export default class RecentDeal extends Component {
    render() {
        return (
            <div className="recent-deal">
                <div className="container column justify-center align-center padding-30" style={{position:'relative'}}>
                    
                        <span className="main-title margin-bottom-30">Recent Deals</span>
                     
                    <div className="row justify-space-between">
                        <RecentCard></RecentCard>
                        <RecentCard></RecentCard>
                    </div>
                </div>
            </div>
        )
    }
}
