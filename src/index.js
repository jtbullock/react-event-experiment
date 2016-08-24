import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import TaskDetail from './components/task-detail';
import InputToggle from './components/input-toggle';
import reducers from './reducers';
import ObTaskList from './containers/ob-task-list';
import ObTaskDetail from './containers/ob-task-detail';

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
          <ObTaskList />
          <ObTaskDetail />

        </div>
      </div>
    );
  }

}


const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container'));
