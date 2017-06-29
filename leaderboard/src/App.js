import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import TableBoard from './components/TableBoard';
import axios from 'axios';
import _ from 'lodash';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }

    this.bookSearch('Tostoy');
  }

  bookSearch(term) {
    console.log(term);
    axios({
      method: 'get',
      type: 'json',
      url: `https://www.googleapis.com/books/v1/volumes?q=${term}`
    })
    .then((books) => {
      this.setState({
        books: books.data.items
      });
    });
  }

  render() {
    const bookSearch = _.debounce(term => { this.bookSearch(term)}, 5000);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header />
        <Search onSearchTermChange={bookSearch} />
        <TableBoard books={this.state.books} />
        <Footer />
      </div>
    );
  }
}

export default App;
