import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Login.css';

class Login extends Component {
	state = {
		userName: ''
	}

	onChange = (evt) => {
		const value = evt.target.value;
		this.setState({ userName: value });
	}

	onLogin = (evt) => {
		evt.preventDefault();
		if(this.state.userName.length > 0) {
			this.props.onLogin(this.state.userName);
			this.props.history.push('/task-app');
		} else {
			alert("At first you have to input name")
		}
	}

	render () {
		return (
			<section className="login-position">
				<form className = " row login-form"
					onSubmit = {this.onLogin}>
					<div className="gradient-border  wrapper-central p-5" id="box">
						<label className="login" htmlFor = "login">
						Enter your name:
						</label>
						<input type="text" id="login" className="login-input m-3" name="userName"
						onChange = {this.onChange}
						value = {this.state.userName}/>
						
					</div>
				</form>
			</section>
		);
	}
};

export default withRouter(Login);