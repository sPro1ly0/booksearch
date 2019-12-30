import React, { Component } from 'react';
import './SearchBook.css';

class SearchBook extends Component {
    render() {
        return (
            <div className="search-bar">
                <form>
                    <label htmlFor="search">Search: </label>
                    <input type="text" id="search" />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBook;