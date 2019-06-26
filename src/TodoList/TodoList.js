import React  from 'react';

import TodoItem from '../TodoItem/TodoItem.js';

import './TodoList.css';


const TodoList = ( {todoData, onDeleted, onToggleDone} ) => {
	const list = todoData.map((item) => {
		const {id, ...rest} = item;
		return (
			<li key={id} className = "list-group-item">
				<TodoItem 
					{...rest}
					onDeleted = {() => onDeleted(id)}/>
			</li>
		);
	});


	return (
		<ul className = "list-group">
			{list}
		</ul>
	);
}

export default TodoList;