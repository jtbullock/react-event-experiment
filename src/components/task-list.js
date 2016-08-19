import React from 'react';
import TaskListItem from './task-list-item';

var TaskList = function({tasks, onTaskClick}) {

  const taskListDisplay = tasks.map((task) => {
    return <TaskListItem onTaskClick={onTaskClick} key={task.taskId} task={task} />;
  });

  return (
    <div className='task-list col-md-3'>
      {taskListDisplay}
    </div>
  );
};

export default TaskList;
