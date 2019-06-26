import React, { Component } from 'react';



class TodoItem extends Component {
	
	render() {
		return (
			<div> 
				<input type="checkbox" id="task" name="task" />
			    <label for="task">{task}</label>
				<button type="button">
				</button>
			</div>
		);
	}
}

export default TodoItem;