import React, { Component } from 'react';
import './SearchBook.css';
import Filters from '../Filters/Filters';
import BookResults from '../BookResults/BookResults';

class SearchBook extends Component {

    constructor(props){
        super(props);
        this.state = {
            q: "",
            items: [],
            printType: "all",
            bookType: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let query = this.state.q.toLowerCase().replace(/ /g, "+");
        let printFilter = this.state.printType;
        let ebookFilter = this.state.bookType;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${printFilter}${ebookFilter}&key=AIzaSyCTT0fo1MiiJFyaMcVdkUBrtqrjCeD57pU`
        console.log(url);

        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Something went wrong, please try again later.')
                }
                return response.json();
            })
            .then(data => {
                
                this.setState({
                    items: data.items,
                    error: null
                })
                console.log(data);
            })
            .catch(error => {
                console.log('Error', error);
                this.setState({
                    error: error.message
                });
            });

    }

    handleInput = (item) => {
        this.setState({
          q: item //harry potter
        })
    }

    changePrintTypeSelection = (value) => {
        this.setState({
            printType: value
        });
    }

    changeBookTypeSelection = (value) => {
        if(value === "no-filter") {
            this.setState({
                bookType: ""
            })
        } else {
            this.setState({
                bookType: `&filter=${value}`
            })
        };
    }

    render() {
        const error = this.state.error
            ? <div className="error">{this.state.error}</div>
            : "";


        return (
            <>
                <div className="search-bar">
                    {error}
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="search">Search: </label>
                        <input 
                            type="text" 
                            name="search"
                            id="search"
                            value={this.state.q}
                            onChange={e => this.handleInput(e.target.value)}
                            required/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <Filters 
                    query={this.state.q}
                    changePrintType={this.changePrintTypeSelection}
                    changeBookType={this.changeBookTypeSelection}/>
                <BookResults bookItems={this.state.items}/>
            </>
        )
    }
}

export default SearchBook;