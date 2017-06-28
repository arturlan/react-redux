import React from 'react';
import { Table } from 'semantic-ui-react';
import TableCell from './TableCell';

const TableBoard = (props) => {
  const bookItem = props.books.map((book) => {
    console.log(book)
    return <TableCell book={book} key={book.etag} />;
  });
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
            {bookItem}
          </Table.Row>
        </Table.Body>

      </Table>
    </div>
  );
}

export default TableBoard;
