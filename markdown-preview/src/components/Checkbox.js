import React, { Component } from 'react';
import '../index.css';

class Checkbox extends Component {

  constructor() {
    super();
    this.state = {checked: true};

    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    var msg;
    this.state.checked ? msg = 'checked' : msg = 'unchecked';

    return (
      <div className="middle">
        <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked}/>
        <h3>Checkbox is {msg}</h3>
      </div>
    )
  }
}

export default Checkbox;
