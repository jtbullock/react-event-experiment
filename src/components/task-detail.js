import React from 'react';
import InputToggle from './input-toggle';

var TaskDetail = function({task}) {

  if(task.fields) {
    var taskFieldList = task.fields.map(function(field) {

      if(field.fieldType == 'InputToggle') {
        return (
          <div key={field.fieldId}>
            <label style={{display:'block'}}>{field.fieldName}</label>
            <InputToggle options={field.fieldOptions} />
          </div>
        );
      }
      else if(field.fieldType == 'Text') {
        return (
          <div className='form-group' key={field.fieldId}>
            <label>{field.fieldName}</label>
            <input type='text' className='form-control' />
          </div>

        )
      }

      return <li key={field.fieldId}>{field.fieldName}</li>;
    });
  }
  else {
    var taskFieldList = [];
  }

  return (
    <div className='task-detail col-md-6'>
      <h3>{task.name}</h3>
      <div className='task-detail-description'>{task.description}</div>

      {taskFieldList}
    </div>
  );
};

export default TaskDetail;
