import React, { Component } from 'react';

class Character extends Component {
  render() {
    return (
        <li className = {this.props.className}>
          <h4> {this.props.name} </h4>
          <img src={this.props.image} alt={this.props.altImage}/>
          <p> Hogwart House: {this.props.house} </p>
          <p> ¿Is he alive?: {this.props.condition} </p>
        </li>
    );
  }
}

export default Character;
