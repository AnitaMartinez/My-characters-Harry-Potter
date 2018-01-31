import React, { Component } from 'react';
import Character from "./Character.js";

class ListCharacters extends Component {

  render() {
    const filterByInputValue = this.props.infoCharacters.filter((itemCharacter) => {
      return itemCharacter.name.toLowerCase().includes(this.props.valueInput.toLowerCase())
    });

    return (
      <ul className="wrapper-grid">

        {filterByInputValue.map((itemCharacter, index) => {
          return <Character
            key = {index}
            name = { itemCharacter.name }
            image = { itemCharacter.image }
            altImage = { itemCharacter.actor }
            house = { itemCharacter.house }
            condition = { itemCharacter.alive ? "hidden" :  "" }
            coreWand = { itemCharacter.wand.core === "" ? "We do not know, sorry" : itemCharacter.wand.core}
          />
        })}

      </ul>
    );
  }
}

export default ListCharacters;
