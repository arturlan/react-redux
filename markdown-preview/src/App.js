import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import ReactDOM from 'react-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DisplayContainer />
      </div>
    );
  }
}

class DisplayContainer extends Component {
  constructor() {
    super();
    this.state = {
      value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    }
  }

  updateValue(modifiedValue) {
    this.setState({
      value: modifiedValue
    });
  }

  rawMarkup(value) {
    var rawMarkup = marked(value, {sanitize: true});
    return { __html: rawMarkup};
  }

  render() {
    return (
      <div className="ui grid">
        <div className="eight wide column">
          <RawInput value={this.state.value} updateValue={this.updateValue}/>
        </div>
        <div className="eight wide column">
          <span dangerouslySetInnerHTML={this.rawMarkup(this.state.value)} />
        </div>
      </div>
    );
  }
}

class RawInput extends Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
  }

  update() {
    var modifiedValue=ReactDOM.findDOMNode(this.refs.inputValue).value;
    this.props.updateValue(modifiedValue);
  }

  render() {
    return (
      <textarea rows="25" type="text" ref="inputValue" value={this.props.value} onChange={this.update}></textarea>
    );
  }
}

export default App;
