import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <input onChange={props.actionToPerfom} type="text" className="inputName" value={props.value} placeholder="Insert a name"/>
  )
}

Input.propTypes = {
  actionToPerfom: PropTypes.func.isRequired,
  value: PropTypes.string

};

export default Input;
