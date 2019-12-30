import React, { Component } from 'react';
import './App.css';
import SearchBook from './SearchBook/SearchBook';
import Filters from './Filters/Filters';
import BookResults from './BookResults/BookResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      printType: "All",
      bookType: "No Filter",
    };
  }

    // const queryItem = this.props.query;

    // const url = `https://www.googleapis.com/books/v1/volumes?q=${queryItem}&key=AIzaSyCTT0fo1MiiJFyaMcVdkUBrtqrjCeD57pU`;

    

    // componentDidMount() {
    //     fetch(url)
    //         .then(response => {
    //             if(!response.ok) {
    //                 throw new Error('Something went wrong, please try again later.')
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.log('Error', error);
    //         });
    // }
 
  handleInput = (item) => {
    console.log(item)
    this.setState({
      q: item.toLowerCase().replace(/ /g, "+") //harry+potter
    })
  }

  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <SearchBook query={this.state.q} newInputItem={this.handleInput}/>
        <Filters />
        <BookResults />
      </main>
    );
  }
  
}

export default App;