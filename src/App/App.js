import React, { Component } from 'react';

import TodoList from '../TodoList/TodoList.js';
import AddForm from '../AddForm/AddForm.js';
import Clock from '../Clock/Clock.js';

import './App.css';

class App extends Component {
	constructor () {
		super()
		this.state = {
			todoData: [
			this.createTask('Drink Coffee'),
			this.createTask('Make Awesome App'),
			this.createTask('Have a lunch'),
			]
		}
	};

  	taskId = 0;

  	createTask = (str) => {
  		return {
  			id: this.taskId++,
  			task: str,
  			done: false,
  		}
  	}

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

  	onSubmit = (task) => {
  		const newTask = this.createTask(task);
  		this.setState(({todoData}) => {
  			const before = todoData.slice();
  			const newArray = [...before, newTask];
  			return {
  				todoData: newArray
  			}
  		});
  	}

	render() {
		const { todoData } = this.state;
		return (
			<section className = "todo-app">
				<div className = "row">
					<div className="col-md-6">
						<TodoList 
						todoData = {todoData}
						onDeleted = {this.onDeleted}
						onToggleDone = {this.onToggleDone}/>
						<AddForm 
						onSubmit = {this.onSubmit}/>
					</div>
					<div className="col-md-6">
						<Clock />
					</div>
				</div>
			</section>
		);
	}
}

export default App;