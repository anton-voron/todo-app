import React, { Component } from 'react';

import './TodoItem.css';


class TodoItem extends Component {
	
	render() {
		const { task, onDeleted, 
				onToggleDone, done 
				} = this.props;
		let classNames = "task-list";
		if(done) {
			classNames += " done"
		}
		return (
			<div className = {classNames}> 
			    <label className="task-item">
				    <input type="checkbox"  name="task" 
						className = "my-checkbox mr-3"
						onClick = {onToggleDone}/>
				    	{task}
			    </label>
				<button type="button"
					className="btn btn-outline-danger btn-sm float-right"
					onClick = {onDeleted}>
					<i className="fa fa-trash-o" />
				</button>
			</div>
		);
	}
}

export default TodoItem;