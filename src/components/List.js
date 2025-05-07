import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

const List = () => {
  const { todos, deleteTodo, searchTerm } = useContext(TodoContext);

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ListGroup>
      {filteredTodos.map(todo => (
        <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
          {todo.text}
          <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default List;
