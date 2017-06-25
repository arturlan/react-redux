import React, { Component } from 'react';
import TableBoard from './TableBoard';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios({
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes?q=${this.state.value}&callback=handleResponse`
    })
    .then(function(response) {
      console.log(response.data);
    });
    event.preventDefault();
  }

  render() {
    return(
      <div>
         <form onSubmit={this.handleSubmit}>
           <label>
             Enter your book:
             <input type="text" value={this.state.value} onChange={this.handleChange} />
           </label>
           <TableBoard />
         </form>
      </div>
    );
  }
}

export default Search;
