import React, { Component } from 'react'
import './listpage.css'
import BreadCrumb from '../components/BreadCrumb'
class Listpage extends Component {
   
    render() {
      return (
          <React.Fragment>
              <BreadCrumb crumb={this.props.crumb}></BreadCrumb>
              <div className="list-page">
                  <div className='container row padding-30'>
                    <div className="row justify-space-between">
                            {this.props.children}
                        </div>
                  </div>
              </div>
          </React.Fragment>
        
      )
    }
  }
  
 
  // function mapStateToProps(state){
  //   // console.log(state)
  //   return({})
  // }
  export default Listpage;