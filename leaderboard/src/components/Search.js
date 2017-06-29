import React, { Component } from 'react';


class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  render() {
    return(
      <div>
         <form>
           <label>
             Enter your book:
             <input type="text" value={this.state.term} onChange={(event) => this.onInputChange(event.target.value)} />
           </label>
         </form>
      </div>
    );
  }

  onInputChange(term, e) {
    this.setState({ term: term });
    this.props.onSearchTermChange(term);
  }
}

export default Search;
