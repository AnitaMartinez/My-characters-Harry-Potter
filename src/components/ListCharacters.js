import React, { Component } from 'react';
import Character from "./Character.js";

class ListCharacters extends Component {

  render() {
    const { infoCharacters } = this.props
    const { valueInput } = this.props
    const filterByInputValue = infoCharacters.filter((itemCharacter) => {
      return itemCharacter.name.toLowerCase().includes(valueInput.toLowerCase())
    });

    return (
      <ul className="wrapper-grid">

        {filterByInputValue.map((itemCharacter, index) => {
          return <Character
            key = {index}
            name = { itemCharacter.name }
            image = { itemCharacter.image }
            altImage = { itemCharacter.actor }
            house = { itemCharacter.house ? itemCharacter.house : "hidden"}
            condition = { itemCharacter.alive ? "hidden" :  "" }
            coreWand = { itemCharacter.wand.core ? itemCharacter.wand.core : "We do not know, sorry"}
          />
        })}

      </ul>
    );
  }
}

export default ListCharacters;
