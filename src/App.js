import React from 'react';
import './App.css';
import SearchBook from './SearchBook/SearchBook';
import Filters from './Filters/Filters';
import BookResults from './BookResults/BookResults';

function App() {
  return (
    <main className='App'>
      <h1>Google Book Search</h1>
      <SearchBook />
      <Filters />
      <BookResults />
    </main>
  );
}

export default App;