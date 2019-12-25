import React, { Component } from 'react'
import './newsletter.css'
import axios from 'axios'
export default class NewsLetter extends Component {
    constructor(){
        super()
        this.state={
            email:''
        }
    }
    componentDidMount(){
        axios({
            method: "POST",
            url: "http://staging.classibazaar.com.au/api/deal/newsletter?fbclid=IwAR3BDXkh2j-jETVSnk0VKHkI8jSlVB5dvVWkWvojdHLSRP1kEzgkzpcrdgw",
            data: {
                
                email: this.state.email,
                
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Email sent, awesome!");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Oops, something went wrong. Try again")
            }
        })
    }
    render() {
        return (
            <div className="newsletter">
                <div className="container row justify-space-between align-center">
                    <div className="newsletter-left row justify-space-between align-center">
                        <img src="./images/bullhorn.svg"></img>
                        <h2>Signup For Newsletter:</h2>
                    </div>
                    <div className="newsletter-signup">
                        <form className="row align-center">
                            <input></input>
                            <div className='row align-center'><span>Signup Now</span></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
