import React, { Component } from 'react';
import './BookTypeFilter.css';

class BookTypeFilter extends Component {
    render() {
        return (
            <div className="book-type-filter">
                <form>
                    <label>Book Type: </label>
                    <select>
                        <option>No Filter</option>
                        <option>Free Ebooks</option>
                        <option>Paid Ebooks</option>
                    </select>
                </form>
            </div>
        )
    };
}

export default BookTypeFilter;