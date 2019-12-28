import React, { Component } from 'react'

import './dropdown.css'

import Select from 'react-select'
export default class DropDown extends Component {
    constructor(){
        super()
        this.state={
            selectedOption:'',
            data:[]
        }
    }
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
           
        );
    };
    componentDidMount(){
        let init=[]
        fetch('http://staging.classibazaar.com.au/api/deal/cities?fbclid=IwAR1hNrqzKPmLTHsLQ_G-yGV6e-XRi2FCf8FQi2K5LP2CB3Mp4BvqbksJ_hc')
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            init=res.map(val=>{
                return val
                
            })
            this.setState({
                data:init
            })
        })
    }
    
    render() {
        const options = [{ "id": "1", "countryId": "5", "cityName": "Sydney", "citycode": "sydney" }, { "id": "2", "countryId": "5", "cityName": "Brisbane", "citycode": "brisbane" }, { "id": "4", "countryId": "5", "cityName": "Melbourne", "citycode": "melbourne" }, { "id": "5", "countryId": "5", "cityName": "Adelaide", "citycode": "adelaide" }, { "id": "6", "countryId": "5", "cityName": "Perth", "citycode": "perth" }, { "id": "7", "countryId": "5", "cityName": "Gold Coast", "citycode": "gold-coast" }, { "id": "8", "countryId": "5", "cityName": "Hobart", "citycode": "hobart" }, { "id": "9", "countryId": "5", "cityName": "Sunshine Coast", "citycode": "sunshine-coast" }, { "id": "10", "countryId": "5", "cityName": "Canberra", "citycode": "canberra" }, { "id": "11", "countryId": "5", "cityName": "Nth Queensland", "citycode": "nth-queensland" }, { "id": "12", "countryId": "5", "cityName": "Wollongong", "citycode": "wollongong" }, { "id": "13", "countryId": "5", "cityName": "Rest of Australia", "citycode": "rest-of-australia" }, { "id": "14", "countryId": "5", "cityName": "Newcastle \/ Central Coast", "citycode": "newcastle-central-coast" }]
        let option=[]
        if(options.length>0){
            options.forEach(role=>{
                let roleData={}
                roleData.value = role.id
                roleData.label = role.cityName
                option.push(roleData)
            })
        }
        return (
            <div className="dropdown column">
               
                <Select options={option} />
            </div>
        )
    }
}
