import React, { Component } from 'react';
import ListCharacters from './components/ListCharacters.js';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>My Harry Potter Characteres</h1>
        </header>
        <main>
          <ul>
            <ListCharacters/>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
