import React, { Component } from 'react'
import './menubar.css'

import {Link } from 'react-router-dom'
import { fetch_menu } from '../action/MenuAction'
import { connect } from 'react-redux'

class Menubar extends Component {
    componentDidMount(){
        this.props.dispatch(fetch_menu())
    }
    render() {
        const {error,loading,menu}=this.props
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
            // console.log(this.props)
        return (
            <div className="menubar">
                <div className="container row justify-space-between" style={{justifyContent:'left',alignItems:'left'}}>                   
                        {
                            menu.map(item => (
                                <span key={item.catid}><Link to={`/${item.catname.replace(/ /g,'-')}`}>{item.catname}</Link></span>
                        ))
                        }
                </div>
            </div>
        )
        }
    }
}
function mapStateToProps(state){
    // console.log(state.menus)
    return (
        {
            menu: state.menus.items,
            loading: state.menus.loading,
            error: state.menus.error
        }
    )
}
export default connect(mapStateToProps)(Menubar)