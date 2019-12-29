import React, { Component } from 'react'

import './dropdown.css'

import Select from 'react-select'
import { fetch_city } from '../action/CityAction'
import { connect } from 'react-redux'
class DropDown extends Component {
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
       this.props.dispatch(fetch_city())
    }
    
    render() {
        const { error, loading, cities } = this.props
        
        
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
            const options = cities
            let option = []
            if (options.length > 0) {
                options.forEach(role => {
                    let roleData = {}
                    roleData.value = role.id
                    roleData.label = role.cityName
                    option.push(roleData)
                })
            }
            // console.log(this.props.cities)
                return (
                    <div className="dropdown column">
                    
                        <Select options={option} />
                    </div>
                )
        }
    }
}
function mapStateToProps(state){
    return({
      cities:state.cities.items,
      loading:state.cities.loading,
      error:state.cities.error
    })
}
export default connect(mapStateToProps)(DropDown)
