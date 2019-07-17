import React, { Component } from 'react';

import TaskApp from '../TaskApp/TaskApp.js';
import {LoginPage, TaskAppPage} from '../todo-components/';
import { LoginProvider } from '../Login-Service-Context/Login-Service-Context.js';
import LoginAPI from '../../service/LoginAPI.js';

import './App.css';

import { HashRouter, Route } from 'react-router-dom';


class App extends Component {
	constructor () {
		super()
		this.state = {
			loginAPI: new LoginAPI()
		}
	};


	render() {
		return (
			<HashRouter basename='/' >
				<LoginProvider value = {this.state.loginAPI}>
					<Route path="/" exact={true} render={() => <LoginPage /> } />
					<Route path="/task-app" render={({match, location, history}) => {
						return <TaskAppPage /> 
					}
					}/>
				</LoginProvider>
			</HashRouter>
		);
	}
}

export default App;