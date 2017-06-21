import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <Table query={this.state.value} />
      </div>
    );
  //   const data = this.state.object;
  //   if (Object.keys(data).length > 0 && data.constructor === Object){
  //   return (
  //     <div>
  //     <form onSubmit={this.componentDidMount}>
  //       <label>
  //         Enter your book:
  //         <input type="text" value={this.state.value} onChange={this.handleChange} />
  //       </label>
  //     </form>
  //     <Table data={data} />
  //   </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //     <form onSubmit={this.componentDidMount}>
  //       <label>
  //         Enter your book:
  //         <input type="text" value={this.state.value} onChange={this.handleChange} />
  //       </label>
  //     </form>
  //   </div>
  //   )
  // }
  }
}

export default Search;
