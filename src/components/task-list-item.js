import React from 'react';

var TaskListItem = function({task, onTaskClick}) {

  return (
    <div className='task-list-item' onClick={() => onTaskClick(task)}>
      {task.name}
    </div>
  );
}

export default TaskListItem;
