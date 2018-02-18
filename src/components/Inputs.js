import React from 'react';
import PropTypes from 'prop-types';

const Inputs = ({actionToPerfom, value, showOnlyStudents,actionToCheck}) => {
  return (
    <div className="container-search">

      <div>

      <div className="flex">
      <input onChange={actionToPerfom} type="text" className="inputName" value={value} placeholder=" Insert a name"/>
      <img src="images/search.png" alt="Logo de buscador" className="icon-search"/>
      </div>

      <div className=" container-checkbox">
        <label htmlFor="checkbox">Mostrar solo alumnos</label>
         <span></span>
        <input className="checkbox" type="checkbox" value="students" id="checkbox" checked={showOnlyStudents} onChange={actionToCheck}/>
      </div>

      </div>

    </div>
  )
}

Inputs.propTypes = {
  actionToPerfom: PropTypes.func.isRequired,
  value: PropTypes.string

};

export default Inputs;
