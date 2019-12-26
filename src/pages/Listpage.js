import React, { Component } from 'react'
import {connect} from 'react-redux'
import './listpage.css'
import RecentCard from './../cardcompoents/RecentCard'
import BreadCrumb from '../components/BreadCrumb'
class Listpage extends Component {
    
    render() {
      return (
          <React.Fragment>
              <BreadCrumb crumb="shopping"></BreadCrumb>
              <div className="list-page">
                  <div className='container row padding-30'>
                    <div className="row justify-space-between">
                            <RecentCard></RecentCard>
                            <RecentCard></RecentCard>
                            <RecentCard></RecentCard>
                        </div>
                  </div>
              </div>
          </React.Fragment>
        
      )
    }
  }
  
  function mapStateToProps(state) {
    return {
      crumb:state.crumb
    };
  }
  
  export default connect(mapStateToProps)(Listpage);