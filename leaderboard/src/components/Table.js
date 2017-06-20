import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import Search from './Search';

class TableBoard extends Component {
  constructor(props) {
    super(props);

    this.handleChangefff = this.handleChangefff.bind(this);
  }

  handleChangefff(event) {
    console.log(this.props.value);
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
      </div>
    );
  }
}

export default TableBoard;
