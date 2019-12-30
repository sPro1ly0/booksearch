import React, { Component } from 'react';

class BookResults extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <div>Picture of Book</div>
                        <h2>Narnia Book Title</h2>
                        <h3>Author: C.S. Lewis</h3>
                        <h3>Price: $10.00</h3>
                        <p>Summary of the Chronicles of Narnia Book Here for the user to read.</p>
                    </li>
                    <li>
                        <div>Picture of Book</div>
                        <h2>Harry Potter</h2>
                        <h3>Author: J.K. Rowling</h3>
                        <h3>Price: $12.00</h3>
                        <p>Summary of the Harry Potter book here. Magic!</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default BookResults;