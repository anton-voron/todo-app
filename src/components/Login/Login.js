import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Login.css';

class Login extends Component {
	state = {
		userName: '',
		userPassword: ''
	}

	onChange = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({[name]:value});
	}

	onLogin = (evt) => {
		evt.preventDefault();
		const {userName, userPassword} = this.state;
		if(this.state.userName.length > 0) {
			this.props.onLogin(userName, userPassword);
			if(this.props.isLoggedIn()) {
				this.props.history.push('/task-app')
			};
		} else {
			alert("At first you have to input name")
		}
	}

	render () {
		return (
			<section className="login-position container">
				<form className = "login-form"
				onSubmit = {this.onLogin}>
					<div className="gradient-border  wrapper-central col-md-12" id="box">
						<label className="login" htmlFor = "login">
						Login:
						</label>
						<input type="text" id="login" className="login-input m-3" name="userName"
						onChange = {this.onChange}
						value = {this.state.userName}/>
						<label className="login" htmlFor = "password">
						Password:
						</label>
						<input type="password" id="password" className="login-input m-3" name="userPassword"
						onChange = {this.onChange}
						value = {this.state.userPassword}/>
						<button type= "submit" className="btn btn-primary"
						onSubmit = {this.onLogin}> 
						Submit </button>
					</div>
				</form>
			</section>
		);
	}
};

export default withRouter(Login);