import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Login.css';

class Login extends Component {
	state = {
		userLogin: '',
		userPassword: '',
		error: null
	}

	onChange = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({[name]:value},
									() => {this.onBlur(name, value)});
	}

	onBlur = (name, value) => {
		if (name == "userLogin") {
			const validator = this.props.loginValidator(value);
			this.setState({error: validator})
		} else if (name == "userPassword") {
			const validator = this.props.passwordValidator(value)
			this.setState({error: validator})
		} else if (name == "userEmail") {
			const validator = this.props.emailValidator(value)
			this.setState({error: validator})
		}
	};

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
		const {userLogin, userPassword, error} = this.state; 
		return (
			<section>
				<form
					onSubmit = {this.onLogin}>
					<div className="gradient-border  wrapper-central col-md-12" id="box">
						<label htmlFor = "login">
							Login:
						</label>
						<input type="text" id="login" className="form-input m-3" name="userLogin"
							onChange = {this.onChange}
							value = {userLogin}
							onBlur = {this.onBlur}/>
						<label htmlFor = "password">
							Password:
						</label>
						<input type="password" id="password" className="form-input m-3" name="userPassword"
							onChange = {this.onChange}
							value = {userPassword}
							onBlur = {this.onBlur}/>
						<button type= "submit" className="btn btn-primary"
							onSubmit = {this.onLogin}> 
						Submit </button>
					</div>
				</form>
				{error && <div className="errorActive">{error}</div>}
			</section>
		);
	}
};

export default withRouter(Login);