import React, { Component } from 'react'
import './dropdown.css'
import $ from 'jquery'
export default class DropDown extends Component {
    constructor(){
        super();
        this.state={
            location:[]
        }
    }
    componentDidMount(){
        fetch("http://staging.classibazaar.com.au/api/deal/home?fbclid=IwAR3MT99zCT2Hp1D1mCYEL29B8e3HqpulWcgOtOp3oP-MUNf02sX0ZR5enEw")
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    location:res.cities
                })
            })
   
    }
    render() {
        const {location}= this.state
        return (
            <div className="dropdown " role="menu"> 
                <div className="dropdown-menu column">
                    {
                        location.map(item=>(
                            <span key={item.id}>{item.cityName}</span>
                        ))
                    }

                </div>
                
            </div>
        )
    }
}
