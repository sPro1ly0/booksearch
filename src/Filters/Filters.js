import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {

    render() {
        return (
            <div className="filter-section">
                <div>
                    <form>
                        <label htmlFor="print-type">Print Type: </label>
                        <select
                            id="print-type"
                            name="print-type"
                            onChange={e => this.props.changePrintType(e.target.value)}>
                            <option value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                    </form>
                </div>
                <div className="book-type-filter">
                    <form>
                        <label htmlFor="book-type">Book Type: </label>
                        <select 
                            id="book-type"
                            name="book-type"
                            onChange={e => this.props.changeBookType(e.target.value)}>
                            <option value="no-filter">No Filter</option>
                            <option value="free-ebooks">Free Ebooks</option>
                            <option value="paid-ebooks">Paid Ebooks</option>
                        </select>
                    </form>
                </div>
            </div>
        )
    };
}

export default Filters;