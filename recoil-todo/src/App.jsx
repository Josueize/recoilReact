import React from "react";
import TodoInput from "./components/TodoInput";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recoil Todo</h1>
      <div className="mb-2">
        <TodoInput />
      </div>
      <div className="mb-2">
        <TodoFilters />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
