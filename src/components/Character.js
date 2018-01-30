import React from 'react';
import PropTypes from 'prop-types';
import iconDead from '../images/dead.png'


const Character = ({name, image, altImage, house, condition, coreWand}) => {
  return (
    <li className="container-character">
      <div className="container-image center">
          <img src={image} alt={altImage} className="imageCharacter"/>
      </div>
      <div className="text-center">
        <h4 className="tittle-character"> {name} </h4>
        <div className={`${house} center`} ></div>
        <img src={iconDead} alt="Icon death" className={`${condition} icon-death`}/>
        <p>{name}''s magic wand contains: {coreWand}.</p>
      </div>
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
