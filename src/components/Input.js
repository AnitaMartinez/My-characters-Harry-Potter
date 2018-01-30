import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
        <input onKeyPress={this.props.actionToPerfom} type="text" name="" value=""/>
    );
  }
}

export default Input;
