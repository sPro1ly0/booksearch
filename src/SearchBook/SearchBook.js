import React, { Component } from 'react';
import './SearchBook.css';

class SearchBook extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.newInputItem(e.target.search.value)
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search">Search: </label>
                    <input 
                        type="text" 
                        name="search"
                        id="search"
                        />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBook;