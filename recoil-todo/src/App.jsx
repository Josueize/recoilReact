// src/App.jsx
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './state/todoState';

function App() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recoil Todo</h1>

      {/* Input */}
      <div className="flex mb-4">
        <input
          className="border p-2 flex-1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo"
        />
        <button
          className="bg-blue-500 text-white px-4 ml-2"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b py-2"
          >
            <span
              onClick={() => toggleComplete(index)}
              className={`flex-1 cursor-pointer ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.text}
            </span>
            <button
              className="text-red-500 ml-2"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
