import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconDead from '../images/dead.png'

class Character extends Component {
  render() {
      return (
          <li>
            <h4> {this.props.name} </h4>
            <div className="container-image">
              <img src={this.props.image} alt={this.props.altImage} className="imageCharacter"/>
            </div>
            <div className={this.props.house}></div>
            <img src={iconDead} alt="Icon death" className={`${this.props.condition} icon-death`}/>
            <p>{this.props.name}''s magic wand contains: {this.props.coreWand}.</p>

          </li>
      );
    }
  }


Character.propTypes = {  //condition
  name: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  coreWand: PropTypes.string
};

export default Character;
