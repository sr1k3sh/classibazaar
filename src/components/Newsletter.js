import React, { Component } from 'react'
import './newsletter.css'

export default class NewsLetter extends Component {
    constructor(){
        super()
        this.state={
            email:''
        }
    }
    componentDidMount(){
       
    }
    getEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
        
    }
    handleClick=()=>{
        const data = this.state.email
        fetch('http://staging.classibazaar.com.au/api/deal/newsletter?fbclid=IwAR0hdvqe6NKlk40lZ-S3yKPtj6hRJ84iCcsJRgEr-BuBurQnP40hZ0hEVoA', {
            method: 'POST',
            body: data,
        })
        .then((response)=>
        alert("email has been sent")
        
        )
        this.refs.email.value='';
    }
    render() {
        return (
            <div className="newsletter">
                <div className="container row justify-space-between align-center">
                    <div className="newsletter-left row justify-space-between align-center">
                        <img src="./images/bullhorn.svg" alt="bullhorn"></img>
                        <h2>Signup For Newsletter:</h2>
                    </div>
                    <div className="newsletter-signup">
                        <form onSubmit={this.handleClick} className="row align-center">
                            <input type="email" ref="email" value={this.state.email} placeholder="Enter your email address" onChange={this.getEmail}></input>
                            <div onClick={this.handleClick} className='row align-center'><span>Signup Now</span></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
