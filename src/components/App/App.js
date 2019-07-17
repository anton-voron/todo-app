import React, { Component } from 'react';

import { RegistrationPage, LoginPage, TaskAppPage } from '../Pages/'
import { LoginProvider } from '../Login-Service-Context/Login-Service-Context.js';
import LoginAPI from '../../service/LoginAPI.js';

import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
	constructor () {
		super()
		this.state = {
			loginAPI: new LoginAPI()
		}
	};


	render() {
		return (
			<BrowserRouter>
				<LoginProvider value = {this.state.loginAPI}>
					<Route path="/" exact={true} render={() => <LoginPage /> } />
					<Route path="/registration" exact={true} render={() => <RegistrationPage /> } />
					<Route path="/task-app" render={({match, location, history}) => {
						return <TaskAppPage /> 
					}
					}/>
				</LoginProvider>
			</BrowserRouter>
		);
	}
}

export default App;