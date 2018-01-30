import React, { Component } from 'react';
import Character from "./components/Character.js"
import Input from "./components/Input.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {
      infoCharacters: [],
      activeSearch: false,
      valueInput: ""
    }

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

  handleKeyPress(event) {
    this.setState({valueInput: event.target.value});
  }

  paintListCharacters() {  //Quizás esto podría estar en el willmount
    const filterByInputValue = this.state.infoCharacters.filter((object) => {
        return object.name.includes(this.state.valueInput)
      });

    return filterByInputValue.map((object, index) => {
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
          <Input actionToPerfom={this.handleKeyPress} value={this.state.valueInput}/>
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
