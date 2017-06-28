import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import TableBoard from './components/TableBoard';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }

    axios({
      method: 'get',
      type: 'json',
      url: `https://www.googleapis.com/books/v1/volumes?q=harry+potter`
    })
    .then((books) => {
      this.setState({
        books: books.data.items
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header />
        <Search />
        <TableBoard books={this.state.books} />
        <Footer />
      </div>
    );
  }
}

export default App;
