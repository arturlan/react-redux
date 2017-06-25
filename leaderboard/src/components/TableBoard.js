import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class TableBoard extends Component {

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
