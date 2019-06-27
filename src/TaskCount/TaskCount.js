 import React from 'react';
 import './TaskCount.css';

const TaskCount = ({active, done}) => {
  return (
    <div className="task-count">
      <p className="active">{active} - task </p>
      <p className="done2"> {done} - completed </p>
    </div>
  );
};

 export default TaskCount;