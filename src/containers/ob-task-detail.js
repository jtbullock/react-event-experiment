import React, { Component } from 'react';
import { connect } from 'react-redux';

class ObTaskDetail extends Component {
  render() {

    if(this.props.selectedTask == null) {
      return <div className="task-detail col-md-6">Please selected a task to get started</div>;
    }

    const propertyList = this.props.selectedTask.contentModel.Task.ETaskContentProperties;

    var fields = propertyList.map((property) => {
      const controlType = property.XTaskContentProperty.controlType;

      var controlContent;

      if(controlType === "DropDown") {
        var options = this.props.selectedTask.contentModel.DropDownData[property.XTaskContentProperty.propertyCode];

        var ddOptions = options.map((option) => {
          return <option value={option.value}>{option.Text}</option>
        });

        controlContent = (
          <select>
            {ddOptions}
          </select>
        );
      }
      else {
        controlContent = property.XTaskContentProperty.propertyLabel
      }

      return <div key={property.ETaskContentPropertyId}>{controlContent}</div>
    });

    return (
      <div className='task-detail col-md-6'>
        Responsible ppl: {this.props.selectedTask.contentModel.ResponsibleParty}

        {fields}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedTask: state.selectedTask
  };
}

export default connect(mapStateToProps)(ObTaskDetail);