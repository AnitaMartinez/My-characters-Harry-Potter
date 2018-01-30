import React, { Component } from 'react';
import Character from "./components/Character.js"

class App extends Component {
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

  paintListCharacters() {
    return this.state.infoCharacters.map((object, index) => {
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
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>My Harry Potter Characteres</h1>
        </header>
        <main>
          <ul>
            {this.paintListCharacters()}
          </ul>
        </main>
      </div>
    );
  }

  componentDidMount() {
    this.fetchInfoCharacters();
  }

}

export default App;
