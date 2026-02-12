import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../selectors/filteredTodosSelector";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoListState);

  if (todos.length === 0) {
    return <p className="text-gray-500">No tasks to show</p>;
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
}
