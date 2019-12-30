import React, { Component } from 'react';
import './App.css';
import SearchBook from './SearchBook/SearchBook';

class App extends Component {

  render() {
    return (
      <main className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBook/>
      </main>
    );
  }
  
}

export default App;