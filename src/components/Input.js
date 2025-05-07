import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

const Input = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3 d-flex gap-2">
      <Form.Control
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default Input;
