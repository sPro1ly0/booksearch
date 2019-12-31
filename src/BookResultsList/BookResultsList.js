import React, { Component } from 'react';
import './BookResultsList.css';
import BookItem from '../BookItem/BookItem';

class BookResultsList extends Component {
    render() {
        const books = this.props.bookItems.map((book, i) => 
            <BookItem {...book} key={i}/>
        );
        return (
            <div className="book-result-list">
                {books}
            </div>
        );
    }
}

export default BookResultsList;