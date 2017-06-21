import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import Search from './Search';

class TableBoard extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(event) {
    axios({
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes?q=${this.state.value}&callback=handleResponse`
    })
      .then(function(response) {
        if (response.data !== undefined){
          this.setState({
            object: response.data
          })
        }
    });
    event.preventDefault()
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return(
      <div>
        <Search />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Author</Table.HeaderCell>
              <Table.HeaderCell>Book</Table.HeaderCell>
              <Table.HeaderCell>Year</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>First</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>

        </Table>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default TableBoard;
