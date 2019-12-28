import React, { Component } from 'react'
import './refercard.css'
import DropDown from './DropDown'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import $ from 'jquery'
export default class ReferCard extends Component {
   
    componentWillUnmount(){
        $('.refer-card-container').css('display','none')
    }
    componentDidMount(){
        $('.no-thanks').click(_=>{
            $('.refer-card-container').fadeOut()
        })
        $('.select-section .button').click(_=>{
            $('.refer-card-container').fadeOut()
        })
    }
    render() {
      
        return (
            <div className="refer-card-container">
                <di className="refer-card column">
                    <div className="refer-title column">
                        <span className="title-uppercase bold">enter code at <span>REFER123</span> checkout</span>
                        <span>To get extra discount 10%</span>
                    </div>
                    <div className="refer-sub-title column align-center">
                        <span>Select Your <span className="primary-color bold">CITY</span></span>
                        <span>For Local <span className="primary-color bold">DAILY DEALS</span></span>
                    </div>
                    <div className="select-section column align-center justify-space-around" style={{height:'100%'}}>
                        <DropDown></DropDown>
                        <Button text="continue" padding="10px 10px" width="fit-content"></Button>
                    </div>
                    <div style={{padding:'10px 0'}}>
                        <p>Permission on 1 deal purchased from one local or good category. Max discount $30. New Classideal customer only.</p>
                    </div>
                    <div className="no-thanks" style={{
                        padding: '6px 0px',
                        borderTop: '1px solid #e0e0e0'}}>
                        <Link to='/'>No thanks</Link>
                    </div>
                </di>
            </div>
        )
    }
}
