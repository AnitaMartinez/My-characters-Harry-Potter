import React from 'react';
import PropTypes from 'prop-types';

const Input = ({actionToPerfom, value, showOnlyStudents,actionToCheck}) => {
  return (
    <div className="container-search">
      <input onChange={actionToPerfom} type="text" className="inputName" value={value} placeholder=" Insert a name"/>
      <img src="images/search.png" alt="Logo de buscador" className="icon-search"/>
      <input type="checkbox" name="" value="" id="checkbox" checked={showOnlyStudents} onChange={actionToCheck}/>
      <label htmlFor="checkbox">Mostrar solo alumnos</label>

    </div>
  )
}

Input.propTypes = {
  actionToPerfom: PropTypes.func.isRequired,
  value: PropTypes.string

};

export default Input;
