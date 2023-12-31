import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Entry from './Entry';

export default function Entries( { entries, deleteEntry }) {
  return (
    <Table striped bordered>
      <tbody>
        {entries.map((entry) => 
          <Entry key={entry.name} entry={entry} deleteEntry={deleteEntry} />)}
      </tbody>
    </Table>
  );
}

Entries.propTypes = {
  entries: PropTypes.array.isRequired,
  deleteEntry: PropTypes.func.isRequired,
};
