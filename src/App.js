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

  handleOnChange(event) {
    this.setState({valueInput: event.target.value});
  }

  paintListCharacters() {  //Quizás esto podría estar en el willmount
    const filterByInputValue = this.state.infoCharacters.filter((object) => {
        return object.name.toLowerCase().includes(this.state.valueInput.toLowerCase())
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
        coreWand = {object.wand.core === "" ? "We do not know, sorry" : object.wand.core}
      />
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

  componentDidMount() {
    this.fetchInfoCharacters();
  }

}

export default App;
