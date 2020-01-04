import React, { Component } from 'react'
import Button from '../components/Button'
import './login.css'
import { connect } from 'react-redux'
import {fetch_login} from './../action/loginAction'
import { Redirect } from 'react-router-dom'
class Login extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            token:'',
            loggedIn:false
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.dispatch(fetch_login(this.state.email,this.state.password))
    }

    render() {
        const {isLogged}=this.props
        // console.log(isLogged)
        if(isLogged===true){
            return <Redirect to="/"></Redirect>
        }
        return (
            <div className="login">
                <div className="container row justify-center align-center">
                    <div className="login-left">
                        <img src="./images/login.jpg" alt="login"></img>
                    </div>
                    <div className="login-right">
                        <form onSubmit={this.handleSubmit}>
                            <h1>Login</h1>
                            {/* <label>email</label> */}
                            <input
                                name='email'
                                placeholder='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            /><br />

                            {/* <label>Password</label> */}
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            /><br />
                            <Button onClick={_=>{
                                document.forms[0].submit()
                            }} text="login" padding="13px 10px"></Button>
                            <input type='submit' style={{display:'none'}}/>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state){
    // console.log(state.logged)
    return({
        isLogged:state.logged.isLogged
    })
}

export default connect(mapStateToProps)(Login);
