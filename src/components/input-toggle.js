import React, {Component} from 'react';

class InputToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {selectedOption: null};
    this.options = props.options;
  }

  render() {
    if(!this.options) {
      return <div></div>;
    }

    var optionButtons = this.options.map((option) => {
      return (
        <button key={option}
          type='button'
          className={"btn " + (this.state.selectedOption == option ? 'btn-primary' : 'btn-default')}
          onClick={() => this.setState({selectedOption:option})}>
        {option}
        </button>);
    });

    return (
      <div className='InputToggle btn-group' role='group'>
        {optionButtons}
      </div>
    );
  }
}

export default InputToggle;
