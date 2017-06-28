import React from 'react';
import { Table } from 'semantic-ui-react';

const TableCell = (book) => {
  return (
    <Table.Cell>{book.volumeInfo}</Table.Cell>
  );
}

export default TableCell;
