import React, { Component } from 'react';

class BookTypeFilter extends Component {
    render() {
        return (
            <div>
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