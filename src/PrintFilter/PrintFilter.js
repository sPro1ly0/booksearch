import React, { Component } from 'react';

class PrintFilter extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Print Type: </label>
                    <select>
                        <option>All</option>
                        <option>Books</option>
                        <option>Magazines</option>
                    </select>
                </form>
            </div>
        )
    };
}

export default PrintFilter;