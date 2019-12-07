import React, { Component } from 'react'

export default class Button extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="button" style={{width:this.props.width}}>
                <span>{this.props.text}</span>
            </div>
        )
    }
}
