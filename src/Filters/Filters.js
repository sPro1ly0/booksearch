import React, { Component } from 'react';
import './Filters.css';
import PrintFilter from '../PrintFilter/PrintFilter';
import BookTypeFilter from '../BookTypeFilter/BookTypeFilter';

class Filters extends Component {
    render() {
        return (
            <div className="filter-section">
                <PrintFilter />
                <BookTypeFilter />
            </div>
        )
    };
}

export default Filters;