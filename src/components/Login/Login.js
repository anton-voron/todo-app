import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Login.css';

class Login extends Component {
	state = {
		userLogin: '',
		userPassword: ''
	}

	onChange = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({[name]:value});
	}

	onLogin = (evt) => {
		evt.preventDefault();
		const {userLogin, userPassword} = this.state;
		if(userLogin.length > 0 && userPassword.length > 0) {
			this.props.onLogin(userLogin, userPassword);
			if(this.props.isLoggedIn()) {
				this.props.history.push('/task-app')
			};
		} else {
			alert("At first you have to input name")
		}
	}

	render () {
		return (
			<section className="container">
				<form
					onSubmit = {this.onLogin}>
					<div className="gradient-border  wrapper-central col-md-12" id="box">
						<label htmlFor = "login">
							Login:
						</label>
						<input type="text" id="login" className="form-input m-3" name="userLogin"
							onChange = {this.onChange}
							value = {this.state.userLogin}/>
						<label htmlFor = "password">
							Password:
						</label>
						<input type="password" id="password" className="form-input m-3" name="userPassword"
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