import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Registration extends Component {

	state = {
		userLogin: '',
		userEmail: '',
		userPassword: ''

	}

	onChange = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({[name]:value});
	}

	onRegister = (evt) => {
		evt.preventDefault();
		const {userLogin, userEmail, userPassword} = this.state;
		if(userLogin.length > 0 && userEmail.length > 0 && userPassword.length > 0) {
			this.props.registerUser(userLogin, userEmail, userPassword);
		} else {
			alert("At first you have to input name")
		}
	}

	render () {
		return (
			<section>
				<form
				onSubmit={this.onRegister}>
					<div className="gradient-border  wrapper-central col-md-12" id="box">
						<label htmlFor = "login">
							Login:
						</label>
						<input type="text" id="login" className="form-input m-3" name="userLogin"
							onChange = {this.onChange}
							value = {this.state.userLogin}/>


						<label htmlFor = "email">
							Email:
						</label>
						<input type="text" id="email" className="form-input m-3" name="userEmail"
							onChange = {this.onChange}
							value = {this.state.userEmail}/>


						<label htmlFor = "password">
							Password:
						</label>
						<input type="password" id="password" className="form-input m-3" name="userPassword"
							onChange = {this.onChange}
							value = {this.state.userPassword}/>

						<button type= "submit" className="btn btn-primary"
							onSubmit = {this.onRegister}> 
								Registrate
						 </button>
						 <Link to = "" className="btn btn-primary"> to Login </Link>
						</div>
				</form>
			</section>
		);
	}
}

export default Registration;