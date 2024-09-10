import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    completed: false,
  });

  const [todos, setTodos] = useState([]);

  const handleTodo = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleComplete = (e, index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index] = {
        ...updatedTodos[index],
        completed: e.target.checked,
      };
      return updatedTodos;
    });
  };

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo({
      title: '',
      description: '',
      completed: false,
    });
  };

  return (
    <div className="container">
      <h2>My Todo App</h2>
      <input
        type="text"
        placeholder="TODO"
        name="title"
        value={todo.title}
        onChange={handleTodo}
      />
      <input
        type="text"
        placeholder="DESCRIPTION"
        name="description"
        value={todo.description}
        onChange={handleTodo}
      />
      <button onClick={addTodo}>Add Todo</button>
      
      <br /><br />

      {todos.length > 0 ? (
        <ul>
          {todos.map((todoItem, index) => (
            <li key={index} className={todoItem.completed ? 'completed' : ''}>
              <strong>{todoItem.title}</strong> - {todoItem.description}
              <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={(e) => handleComplete(e, index)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>Todo list not created</div>
      )}
    </div>
  );
}
