import React from 'react';
import { Table } from 'semantic-ui-react';

const TableCell = (book) => {
  // console.log(book.book)
  return (
    <Table.Row>
      <Table.Cell>{book.book.volumeInfo.authors[0]}</Table.Cell>
      <Table.Cell>{book.book.volumeInfo.title}</Table.Cell>
      <Table.Cell>{book.book.volumeInfo.publishedDate}</Table.Cell>
    </Table.Row>
  );
}

export default TableCell;
