import React from 'react';
import PropTypes from 'prop-types';

const Input = ({actionToPerfom, value}) => {
  return (
    <div className="container-search">
      <input onChange={actionToPerfom} type="text" className="inputName" value={value} placeholder=" Insert a name"/>
      <img src="images/search.png" alt="Logo de buscador" className="icon-search"/>
    </div>
  )
}

Input.propTypes = {
  actionToPerfom: PropTypes.func.isRequired,
  value: PropTypes.string

};

export default Input;
