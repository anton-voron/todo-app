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
		console.log(value);
	}

	onLogin = (evt) => {
		evt.preventDefault();
		this.props.onLogin(this.state.userName);
		this.props.history.push('/task-app');
	}

	render () {
		return (
			<section className="login-position">
				<form className = "login-form"
					onSubmit = {this.onLogin}>
					<div className="gradient-border" id="box">
						<label className="login">
						Enter your name:
						    <input type="text" id="login" className="login-input m-3" name="userName"
						    onChange = {this.onChange}
						    value = {this.state.userName}/>
					    </label>
						
					</div>
				</form>
			</section>
		);
	}
};

export default withRouter(Login);