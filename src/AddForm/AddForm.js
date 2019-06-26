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
		this.props.onSubmit(this.state.task)
		this.setState( {task: ''})
	}

	render () {
		const { task } = this.state;
		return (
			<div className = "add-form">
				<span> Hi, Anton! What we are going to do? </span>
				<form className = "item-add-form d-flex"
					onSubmit = {this.onSubmit}>
					<input type = "text" className = "add-form"
					value = {task}
					onChange = {this.onChange}/>
					<button className = "submit-button">
						Add task
					</button>
				</form>
			</div>
		);
	}
}