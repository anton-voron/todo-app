import React, { Component } from 'react';

import TodoList from '../TodoList/TodoList.js';

import './App.css';

class App extends Component {

	state = {
    todoData: [
    	{id: 1, task: "Todo cool App", done: false}
    	]
  	}

  	onDeleted = (id) => {
  		console.log(id);
  	}
	render() {
		const { todoData } = this.state;
		return (
			<section className = "todo-app">
				<TodoList 
				todoData = {todoData}
				onDeleted = {this.onDeleted}/>
			</section>
		);
	}
}

export default App;