import React, { Component } from 'react';
import axios from 'axios';

class Presidents extends Component {
  constructor() {
    super()

    this.state = {
      presidents: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/users')
      .then(res => {
        this.setState({ presidents: res });
        console.log(res.data[0].president);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {/* {
          this.state.presidents.map((president => {
            return <p>{president}</p>
          }))
        } */}
        {this.state.data[0].presidents}
      </div>
    );
  }
}

export default Presidents;
