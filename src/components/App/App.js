import React, { Component } from 'react';

import {Registrationpage, LoginPage, TaskAppPage} from '../todo-components/';
import { LoginProvider } from '../Login-Service-Context/Login-Service-Context.js';
import LoginAPI from '../../service/LoginAPI.js';

import './App.css';

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
					<Route path="/reg" exact={true} render={() => <Registrationpage /> } />
					<Route path="/" exact={true} render={() => <LoginPage /> } />
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