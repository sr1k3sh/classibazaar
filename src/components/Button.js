import React, { Component } from 'react'

export default class Button extends Component {
   
    render() {
        return (
            <div onClick={this.props.onClick} className={`button ${this.props.className}` } style={{width:this.props.width,padding:this.props.padding}}>
                <span>{this.props.text}</span>
            </div>
        )
    }
}
