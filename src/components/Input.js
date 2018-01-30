import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    return (
        <input onChange={this.props.actionToPerfom} type="text" className="inputName" value={this.props.value} placeholder="Insert a name"/>
    );
  }
}

Input.propTypes = {  //condition
  actionToPerfom: PropTypes.func.isRequired,
  value: PropTypes.string

};

export default Input;
