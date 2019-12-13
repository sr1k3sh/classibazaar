import React, { Component } from 'react'
import './newsletter.css'
export default class NewsLetter extends Component {
    render() {
        return (
            <div className="newsletter">
                <div className="container row justify-space-between">
                    <div className="row justify-space-between">
                        <img src="./images/bullhorn.svg"></img>
                        <span>Signup For Newsletter:</span>
                    </div>
                    <div>
                        <form>
                            <input></input>
                            <div><span>Signup Now</span></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
