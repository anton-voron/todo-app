import React, { Component } from 'react';

import TaskApp from '../TaskApp/TaskApp.js';
import Login from '../Login/Login.js';

import './App.css';

import { HashRouter, Route } from 'react-router-dom';


class App extends Component {
	constructor () {
		super()
		this.state = {
			userName: '',
			isLoggedIn: false
		}
	};

  	onLogin = (name) => {
  		return this.setState({
  			userName: name,
  			isLoggedIn: !this.state.isLoggedIn})
  	}

	render() {
		const {userName, isLoggedIn } = this.state;

		return (
			<HashRouter basename='/' >
				<Route path="/" exact={true} render={() => <Login onLogin={this.onLogin}/> } />
				<Route path="/task-app" render={({match, location, history}) => {
					return <TaskApp userName={userName} isLoggedIn = {isLoggedIn}/> 
				}
				}/>
			</HashRouter>
		);
	}
}

export default App;