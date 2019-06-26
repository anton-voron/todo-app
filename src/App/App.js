import React, { Component } from 'react';

import AddForm from '../AddForm/AddForm.js';
import TodoList from '../TodoList/TodoList.js';
import Clock from '../Clock/Clock.js';
import Filter from '../Filter/Filter.js';

import './App.css';

class App extends Component {
	constructor () {
		super()
		this.state = {
			todoData: [
			this.createTask('Drink Coffee'),
			this.createTask('Make Awesome App'),
			this.createTask('Have a lunch'),
			],
			filter: 'all'
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

  	filter = (arr, filter) => {
  		switch (filter) {
  			case "all": return arr;
  			case "active": return arr.filter(item => item.done === false);
  			case "done": return arr.filter(item => item.done === true);
  		}
  	}
  	onFilterChange = (filter) => {
  		this.setState({filter});
  	}

	render() {
		const { todoData, filter } = this.state;
		const visibleItem = this.filter(todoData, filter);
		return (
			<section className = "todo-app container">
				<div className = "row">
					<div className="col-md-12">
						<div className="central-app wrapper-central">
							<Clock />
							<AddForm 
							onSubmit = {this.onSubmit}/>
						</div>
					</div>
					<div className="col-md-12">
						<div className="user-panel">
							<Filter
							filter = {filter} 
							onFilterChange = {this.onFilterChange}/>
						</div>
						<TodoList 
						todoData = {visibleItem}
						onDeleted = {this.onDeleted}
						onToggleDone = {this.onToggleDone}/>
					</div>
				</div>
			</section>
		);
	}
}

export default App;