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
            data:[],
            
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
        const style={
            control: base => ({
                ...base,
                background: this.props.background,
                border: `1px solid ${this.props.background}`,
                boxShadow:'none',
                cursor:'pointer',
                transition:'all 0.3s ease-in-out',
                '&:hover': {
                    borderBottom: '1px solid #fff',
                    borderTop:'none',
                    borderLeft:'none',
                    borderRight:'none',
                    boxShadow: 'none',
                },
                '&:focus':{
                    outline:'none'
                }
            }),
            placeholder: (defaultStyles) => {
                return {
                    ...defaultStyles,
                    color: this.props.color,
                
                }
            },
           
        }    
        
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
                    
                        <Select placeholder="Australia" options={option} theme={theme => ({
                            ...theme,
                            borderRadius: 3,
                            
                            colors: {
                                ...theme.colors,
                                neutral90:'blue',
                                // primary25: 'hotpink',
                                primary: 'grey',
                            },
                        })} styles={style} />
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
