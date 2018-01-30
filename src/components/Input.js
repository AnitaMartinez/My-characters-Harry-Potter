import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
        <input onChange={this.props.actionToPerfom} type="text" name="" value={this.props.value} placeholder="Insert a name"/>
    );
  }
}

export default Input;
