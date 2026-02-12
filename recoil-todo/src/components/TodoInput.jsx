import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtom";

export default function TodoInput() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  return (
    <div className="flex">
      <input
        className="border p-2 flex-1 rounded"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo"
      />
      <button
        className="bg-blue-500 text-white px-4 ml-2 rounded"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
}
