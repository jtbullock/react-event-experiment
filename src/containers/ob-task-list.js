import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskListItem from '../components/task-list-item';
import { bindActionCreators } from 'redux';
import { selectTask } from '../actions/index';

class ObTaskList extends Component {

  renderList() {
    const taskList = this.props.activeEvent.TaskList;

    return taskList.map((task) => {
      return (
        <div key={task.ETaskId} onClick={() => this.props.selectTask(task.TaskHeader)}>
          <TaskListItem
            header={task.TaskHeader}
            status={task.Status}
           />
        </div>
      )
    });
  }
// <div>OB task list.  Total tasks: { this.props.activeEvent.TotalTasks }</div>

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeEvent: state.activeEvent
  };
}

// Anything returned from this function will end up as props
// on the BookList container.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers.
  return bindActionCreators({selectTask: selectTask}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ObTaskList);