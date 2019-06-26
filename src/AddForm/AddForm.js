import React, { Component } from 'react';

import './AddForm.css';

export default class AddForm extends Component {

	state = {
		task: ""
	}

	onChange = (evt) => {
		const value = evt.target.value;
		this.setState( {task: value})
		console.log(value)
	}

	onSubmit = (evt) => {
		evt.preventDefault();
		if(this.state.task.length > 0) {
		this.props.onSubmit(this.state.task)
		this.setState( {task: ''})
		}
	}

	render () {
		const { task } = this.state;
		return (
			<div className = "add-form">
				<form className = "item-add-form d-flex"
					onSubmit = {this.onSubmit}>
					<button className = "submit-button">
						Add task
					</button>
					<input type = "text" className = "add-form"
					value = {task}
					onChange = {this.onChange} />
				</form>
			</div>
		);
	}
}