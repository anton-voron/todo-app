import React, { Component } from 'react';

import TaskApp from '../TaskApp/TaskApp.js';
import Login from '../Login/Login.js';

import './App.css';


class App extends Component {
	constructor () {
		super()
		this.state = {
			userName: ''
		}
	};

  	onLogin = (name) => {
  		return this.setState({userName: name})
  	}

	render() {
		const {userName } = this.state;

		return (
			<section className = "todo-app container">
					<Login onLogin = {this.onLogin}/>
					<TaskApp userName = {userName}/>
			</section>
		);
	}
}

export default App;