import React, { Component } from 'react';
import Character from './Character.js';

class ListCharacters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoCharacters: []
    }

    this.fetchInfoCharacters = this.fetchInfoCharacters.bind(this);
  }

  fetchInfoCharacters() {
    const ENDPOINT = "http://hp-api.herokuapp.com/api/characters";
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          infoCharacters: data
        });
      });
  }

  render() {
    return ( //Esto quizás lo puedo hacer en una función aparte
      this.state.infoCharacters.map((object, index) => {
        let listOfCharacters =
          <Character
                key = {index}
                name = {object.name}
                image = {object.image}
                altImage = {object.actor}
                house = {object.house}
                condition = {object.alive ? "alive" :  "dead" }
          />
        return listOfCharacters
      })
    );
  }

  componentDidMount() {
    this.fetchInfoCharacters();
  }
}


export default ListCharacters;
