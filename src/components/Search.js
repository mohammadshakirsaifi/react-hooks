import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(TodoContext);

  return (
    <Form.Control
      type="text"
      placeholder="Search todos..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mb-3"
    />
  );
};

export default Search;
