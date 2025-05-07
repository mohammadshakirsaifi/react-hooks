import React from 'react';
import { Container } from 'react-bootstrap';
import List from './components/List';
import Search from './components/Search';
import ClearAll from './components/ClearAll';
import { TodoProvider } from './context/TodoContext';
import Input from './components/Input';

function App() {
  return (
    <TodoProvider>
      <Container className="py-5" style={{ maxWidth: '600px' }}>
        <h1 className="mb-4">To-Do List</h1>
        <Search />
        <Input />
        <List />
        <ClearAll />
      </Container>
    </TodoProvider>
  );
}

export default App;
