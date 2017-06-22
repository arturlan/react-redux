import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

class TableBoard extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes?q=${this.props.book}&callback=handleResponse`
    })
    .then(function(response) {
      // console.log(response.data);

    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return(
      <div>
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
      </div>
    );
  }
}

export default TableBoard;
