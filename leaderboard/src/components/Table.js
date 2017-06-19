import React, { Component } from 'react';
import { Input, Table, Button } from 'semantic-ui-react';
import axios from 'axios';

class TableBoard extends Component {
  constructor() {
    super();

  }

  callToGoogleTrends() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return(
      <div>
        <Input action='Search' placeholder='Search...' onClick={this.callToGoogleTrends}/>
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
