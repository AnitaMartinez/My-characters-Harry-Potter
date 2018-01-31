import React from 'react';
import PropTypes from 'prop-types';


const Character = ({name, image, altImage, house, condition, coreWand}) => {
  return (
    <li className="container-character">
      <div className="container-image center">
          <img src={image} alt={altImage} className="imageCharacter"/>
      </div>
      <div className="text-center">
        <h4 className="tittle-character"> {name} </h4>
        <div>
          <div className={`${house} center icon-house`} ></div>
          <img src="images/dead.png" alt="Icon death" className={`${condition} icon-death`}/>
        </div>
        <p className="line-height-lg" >{name}''s magic wand contains: {coreWand}.</p>
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
