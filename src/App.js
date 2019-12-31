import React, { Component } from 'react';
import './App.css';
import SearchBookInput from './SearchBookInput/SearchBookInput';

class App extends Component {

  render() {
    return (
      <main className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBookInput/>
      </main>
    );
  }
  
}

export default App;