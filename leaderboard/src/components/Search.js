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
         <form onSubmit={this.componentDidMount}>
           <label>
             Enter your book:
             <input type="text" value={this.state.value} onChange={this.handleChange} />
           </label>
           <TableBoard book={this.state.value} />
         </form>
      </div>
    );
  }
}

export default Search;
