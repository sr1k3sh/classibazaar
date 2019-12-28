import React, { Component } from 'react'

export default class Options extends Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }
    onSelect(e) {
        e.preventDefault();
        this.props.onSelect(this.props.option);
    }
    render() {
        return (
            <React.Fragment>
                <li onClick={this.onSelect}>
                    <div style={{
                        display: 'flex',
                        justifyContent:'space-around'
                    }}>
                        {/* <img src="./images/clock.svg" alt="calendar icon" className="e-icon"></img> */}
                        <span>current time:</span>
                        <span>{this.props.option.time}</span>
                        {/* <span style={{ width: 103 }}>{this.props.option.zone}</span>
                        <span>{this.props.option.timezone}</span> */}
                    </div>
                </li>
            </React.Fragment>

        )
    }
}
