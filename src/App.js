import React, { Component } from 'react';
import Header from "./components/Header.js"
import Character from "./components/Character.js"
import Input from "./components/Input.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      infoCharacters: [],
      valueInput: ""
    }
  }

  handleOnChange(event) {
    this.setState({valueInput: event.target.value});
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

  componentDidMount() {
    this.fetchInfoCharacters();
  }

  paintListCharacters() {
    const filterByInputValue = this.state.infoCharacters.filter((itemCharacter) => {
        return itemCharacter.name.toLowerCase().includes(this.state.valueInput.toLowerCase())
      });

    return filterByInputValue.map((itemCharacter, index) => {
      const listOfCharacters = (
      <Character
        key = {index}
        name = {itemCharacter.name}
        image = {itemCharacter.image}
        altImage = {itemCharacter.actor}
        house = {itemCharacter.house}
        condition = {itemCharacter.alive ? "alive" :  "" }
        coreWand = {itemCharacter.wand.core === "" ? "We do not know, sorry" : itemCharacter.wand.core}
      />
      )
      return listOfCharacters
    });
  };

  render() {
      return (
      <div>
        <Header/>
        <main>
          <Input actionToPerfom={this.handleOnChange} value={this.state.valueInput}/>
          <ul>
            {this.paintListCharacters()}
          </ul>
        </main>
      </div>
    );
  }

}

export default App;
