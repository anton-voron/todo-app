import React, { Component } from 'react';

import TaskApp from '../TaskApp/TaskApp.js';
import Login from '../Login/Login.js';

import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


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
			<Router>
				<Route path="/login" component = {Login} />
				<Route path="/task-app" component = {TaskApp} />
			</Router>
			</section>
		);
	}
}

export default App;