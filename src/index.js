import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TaskDetail from './components/task-detail';
import TaskList from './components/task-list';
import InputToggle from './components/input-toggle';

var taskData = [
  {
    taskId: 0,
    name: 'Welcome!',
    description: 'Welcome to your event!'
  },
  {
    taskId: 1,
    name: 'Home Contact',
    description: 'Personal contact information',
    fields: [
      {
        fieldId: 1,
        fieldName: 'FirstName',
        fieldType: 'Text'
      },
      {
        fieldId: 2,
        fieldName: 'LastName',
        fieldType: 'Text'
      }
    ]
  },
  {
    taskId: 2,
    name: 'Employee Status',
    description: 'Employee Hire Information',
    fields: [
      {
        fieldId: 1,
        fieldName: 'HireDate',
        fieldType: 'Text'
      },
      {
        fieldId: 2,
        fieldName: 'Status',
        fieldType: 'InputToggle',
        fieldOptions: ['Active', 'Terminated', 'Leave']
      }
    ]
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedTask: taskData[0] };
  }

  render() {
    return(
      <div>
        <h1>Test App</h1>
        <div className='row'>
          <TaskList tasks={taskData} onTaskClick={(task) => this.setState({selectedTask: task})} />
          <TaskDetail task={this.state.selectedTask} />
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
