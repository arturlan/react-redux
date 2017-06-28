import React, { Component } from 'react';


class Search extends Component {

  render() {
    return(
      <div>
         <form>
           <label>
             Enter your book:
             <input type="text"/>
           </label>
         </form>
      </div>
    );
  }
}

export default Search;
