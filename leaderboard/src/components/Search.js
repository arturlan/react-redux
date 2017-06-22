import React, { Component } from 'react';
import TableBoard from './TableBoard';

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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <div>
         <form onSubmit={this.handleSubmit}>
           <label>
             Enter your book:
             <input type="text" onChange={this.handleChange} />
           </label>
         </form>
         <TableBoard book={this.state.value} />
      </div>
    );
  }
}

export default Search;
