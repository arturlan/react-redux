import React, { Component } from 'react';
import TableBoard from './TableBoard';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {books: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    this.setState({books: event.target.value});
  }

  handleSubmit(event) {
    axios({
      method: 'get',
      type: 'json',
      url: `https://www.googleapis.com/books/v1/volumes?q=${this.state.books}`
    })
    .then((response) => {
      console.log(response.data.items[0].volumeInfo.title);
    });
    event.preventDefault();
  }

  render() {
    return(
      <div>
         <form onSubmit={this.handleSubmit}>
           <label>
             Enter your book:
             <input type="text" value={this.state.books} onChange={this.handleChange} />
           </label>
           <TableBoard />
         </form>
      </div>
    );
  }
}

export default Search;
