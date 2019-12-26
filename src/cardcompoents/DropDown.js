import React, { Component } from 'react'
import './dropdown.css'
import Select from 'react-select';

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
        const techCompanies = [
            { label: "Apple", value: 1 },
            { label: "Facebook", value: 2 },
            { label: "Netflix", value: 3 },
            { label: "Tesla", value: 4 },
            { label: "Amazon", value: 5 },
            { label: "Alphabet", value: 6 },
        ];
        // const {location}= this.state
        
        return (
            <div className="dropdown">
                <Select placeholder="Austrila" options={this.state.location} />
            </div>
            // <div className="dropdown " role="menu"> 
            //     <div className="dropdown-menu column">
            //         {
            //             location.map(item=>(
            //                 <span key={item.id}>{item.cityName}</span>
            //             ))
            //         }

            //     </div>
                
            // </div>
        )
    }
}
