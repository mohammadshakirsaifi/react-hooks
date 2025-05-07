import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

const ClearAll = () => {
  const { clearAll } = useContext(TodoContext);

  return (
    <Button variant="danger" onClick={clearAll} className="mt-3">
      Clear All
    </Button>
  );
};

export default ClearAll;

