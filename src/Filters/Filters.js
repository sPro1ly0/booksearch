import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            printType: "all",
            bookType: "",
            items: []
        }
    }

    // componentDidMount() {

    //     const printFilter = '&printType=' + this.state.printType;
    //     let ebookFilter = this.state.printType;

    //     if (this.state.printType === free-ebooks || this.state.printType === paid-ebooks ) {
    //         ebookFilter = '&filter=' + this.state.printType
    //     } else {
    //         return ebookFilter;
    //     }
        
    //     let query = this.props.query;

    //     const url = `https://www.googleapis.com/books/v1/volumes?q=${query}${printFilter}${ebookFilter}&key=AIzaSyCTT0fo1MiiJFyaMcVdkUBrtqrjCeD57pU`
    //     console.log(url);
    //     //fetch(url)
    // }

    changePrintTypeSelection(value) {
        this.setState({
            printType: value
        })
    }

    changeBookTypeSelection(value) {
        if(value === "no-filter") {
            this.setState({
                bookType: ""
            })
        } else {
            this.setState({
                bookType: value
            })
        };
    }

    render() {
        return (
            <div className="filter-section">
                <div>
                    <form>
                        <label htmlFor="print-type">Print Type: </label>
                        <select
                            id="print-type"
                            name="print-type"
                            onChange={e => this.changePrintTypeSelection(e.target.value)}>
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
                            onChange={e => this.changeBookTypeSelection(e.target.value)}>
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