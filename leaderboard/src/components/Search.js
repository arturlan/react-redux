import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableBoard from './TableBoard';
import { booksFetchData } from '../actions/booksActions';
import axios from 'axios';


connect((store) => {
  return {
    books: store.books
  };
})

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {books: []};
  //
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   }
  //
  // handleChange(event) {
  //   this.setState({books: event.target.value});
  // }
  //
  // handleSubmit(event) {
  //   axios({
  //     method: 'get',
  //     type: 'json',
  //     url: `https://www.googleapis.com/books/v1/volumes?q=${this.state.books}`
  //   })
  //   .then((response) => {
  //     console.log(response.data.items[0].volumeInfo.title);
  //   });
  //   event.preventDefault();
  // }

  booksFetchData() {
    this.props.dispatch(booksFetchData())
  }

  render() {
    console.log(this.props)
    return(
      <div>
         <form onSubmit={this.booksFetchData.bind(this)}>
           <label>
             Enter your book:
             {/* <input type="text" value={this.state.books} onChange={this.handleChange} /> */}
             <input type="text" />
           </label>
           <TableBoard />
         </form>
      </div>
    );
  }
}

export default Search;
