import React, { Component } from 'react'
import './newsletter.css'
import { base_url } from '../constant/action-types'

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
        const email = this.state.email
        console.log(email)
        fetch(base_url+'api/deal/newsletter?fbclid=IwAR0hdvqe6NKlk40lZ-S3yKPtj6hRJ84iCcsJRgEr-BuBurQnP40hZ0hEVoA', {
            
            method: 'POST',
            headers: {
                'Accept': 'application/jsonp',
                'Content-Type': 'application/jsonp',
                
            },
            body:JSON.stringify({"email":email})
        })
            .then(res => res.json())
            .then(res => console.log(res));
        // .then((response)=>
        //     alert(JSON.stringify(response))
        // )
        // .catch((e)=>
        //     alert(e)
        // )
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
