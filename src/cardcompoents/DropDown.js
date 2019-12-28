import React, { Component } from 'react'
import Options from './Options';
import './dropdown.css'
// import SimpleBarReact from "simplebar-react";
// import "simplebar/src/simplebar.css";
import $ from 'jquery'
export default class DropDown extends Component {
    constructor() {
        super()
        this.state = {
            selected: null,

        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        // this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        // document.addEventListener('mousedown', this.handleClickOutside);
        // $('.dropdowndiv.select').click(function () {
        //     $('.dropdownlist').fadeToggle()
        // })
    }
    componentWillUnmount() {
        // document.removeEventListener('mousedown', this.handleClickOutside);
    }
    // handleClickOutside(event) {
    //     if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {

    //         $('.dropdownlist').fadeOut()
    //     }
    // }
    /**
  * Set the wrapper ref
  */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    onSelect = (option) => {
        this.setState({
            selected: option,

        }, () => {
            //console.info(this.state);
        });
    }
    getOptions = () => {
        return this.props.options.map((o, i) => <Options key={i} option={o} onSelect={this.onSelect} />);
    }
    render() {
        let items = this.getOptions();
        // let selected = this.state.selected?this.state.selected.value:'Select'
        let time = this.state.selected ? this.state.selected.time : '12:45'
        let zone = this.state.selected ? this.state.selected.zone : 'Asia/Kathmandu'
        let timezone = this.state.selected ? this.state.selected.timezone : 'GMT+5:45'


        return (
            <div ref={this.setWrapperRef} className="dropdowndiv select" onClick={this.onOpen}>
                <div style={{
                    
                    display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderRadius: '5px'
                }}>
                    {/* <img src="./images/clock.svg" alt="calendar icon" className="e-icon"></img> */}
                    <span>current time:</span>
                    <span>{time}</span>
                    {/*  /map-pin.svg" alt="calendar icon" className="e-icon"></img> */}

                </div>
                {/* <SimpleBarReact className={`dropdownlist `} style={{ maxHeight: 200 }}> */}
                    <ul>{items}</ul>

                {/* </SimpleBarReact> */}
            </div>
        )
    }
}
