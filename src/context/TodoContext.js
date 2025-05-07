import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // State for todos and search term
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load from localStorage on initial load
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, clearAll, searchTerm, setSearchTerm }}>
      {children}
    </TodoContext.Provider>
  );
};
