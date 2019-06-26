import React, { Component } from 'react';

import TodoList from '../TodoList/TodoList.js';

import './App.css';

class App extends Component {

	state = {
    todoData: [
    	{id: 1, task: "Todo cool App", done: false}
    	]
  	};

  	onToggleDone = (id) => {
  		this.setState(({todoData}) => {
  			const idx = todoData.findIndex((item) => item.id === id);
  			const oldItem = todoData[idx];
  			const newItem = {
  					...oldItem,
  					done: !oldItem.done
  			};
  			const before = todoData.slice(0, idx);
  			const after = todoData.slice(idx + 1);
  			const newArray = [...before, newItem, ...after];
			return {
				todoData: newArray
			};
  		});
  	}

  	onDeleted = (id) => {
  		this.setState(({todoData}) => {
  			const idx = todoData.findIndex((item) => item.id === id);
  			const before = todoData.slice(0, idx);
  			const after = todoData.slice(idx + 1);
  			const newArray = [...before, ...after];
			return {
				todoData: newArray
			};
  		});
  	};

	render() {
		const { todoData } = this.state;
		return (
			<section className = "todo-app">
				<TodoList 
				todoData = {todoData}
				onDeleted = {this.onDeleted}
				onToggleDone = {this.onToggleDone}/>
			</section>
		);
	}
}

export default App;