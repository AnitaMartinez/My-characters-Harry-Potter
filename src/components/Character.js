import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconDead from '../images/dead.png'


const Character = ({name, image, altImage, house, condition, coreWand}) => {
  return (
    <li>
      <h4> {name} </h4>
      <div className="container-image">
        <img src={image} alt={altImage} className="imageCharacter"/>
      </div>
      <div className={house}></div>
      <img src={iconDead} alt="Icon death" className={`${condition} icon-death`}/>
      <p>{name}''s magic wand contains: {coreWand}.</p>
    </li>
  )
}


Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  coreWand: PropTypes.string,
  condition: PropTypes.string
};

export default Character;
