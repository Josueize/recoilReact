import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtom";

export default function TodoItem({ todo, index }) {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleComplete = () => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <li className="flex justify-between items-center border-b py-2">
      <span
        onClick={toggleComplete}
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
      <button className="text-red-500 ml-2" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  );
}
