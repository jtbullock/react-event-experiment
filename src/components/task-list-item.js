import React from 'react';

var TaskListItem = function(props) {
  const statusText = props.status == 0 ? "Incomplete" : "Complete";

  return (

    <div className='task-list-item'>
      {props.header}
      <div className='task-list-item-status'>
        {statusText}
      </div>
    </div>
  );
};

export default TaskListItem;
