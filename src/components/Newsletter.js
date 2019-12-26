import React, { Component } from 'react'
import './newsletter.css'

export default class NewsLetter extends Component {
    
    componentDidMount(){
       
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
