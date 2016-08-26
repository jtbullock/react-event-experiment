import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

class ObTaskDetail extends Component {
  render() {

    if(this.props.selectedTask == null) {
      return <div className="task-detail col-md-6">Please selected a task to get started</div>;
    }

    const propertyList = this.props.selectedTask.contentModel.Task.ETaskContentProperties;

    var fields = propertyList.map((property) => {
      const controlType = property.XTaskContentProperty.controlType;

      var controlContent;

      var labelText = property.XTaskContentProperty.propertyLabel + (property.XTaskContentProperty.required ? " (required)" : "");

      if(controlType === "DropDown") {
        var options = this.props.selectedTask.contentModel.DropDownData[property.XTaskContentProperty.propertyCode];

        var ddOptions = options.map((option) => {
          return <MenuItem value={option.value} primaryText={option.Text} />
        });

        controlContent = (
          <SelectField
            floatingLabelText={labelText}
            value={null}>
            {ddOptions}
          </SelectField>
        );
      }
      else if(controlType === "Date") {
        controlContent = <DatePicker floatingLabelText={labelText} />
      }
      else {
        controlContent = <TextField floatingLabelText={labelText} />
      }

      return <div key={property.ETaskContentPropertyId}>{controlContent}</div>
    });

    return (
      <Paper style={{'width':600, 'margin':'30 auto', padding:12}}>
        <h2>{this.props.selectedTask.contentModel.Task.TaskName}</h2>

        Responsible actors: {this.props.selectedTask.contentModel.ResponsibleParty}

        {fields}
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedTask: state.selectedTask
  };
}

export default connect(mapStateToProps)(ObTaskDetail);