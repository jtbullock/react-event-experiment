import React from 'react';
import MenuItem from 'material-ui/MenuItem';

var TaskListItem = function(props) {
  const statusText = props.status == 0 ? "Incomplete" : "Complete";

  return (

    <MenuItem>
      {props.header}

    </MenuItem>
  );
};

{/*<div className='task-list-item-status'>*/}
  {/*{statusText}*/}
{/*</div>*/}

export default TaskListItem;
