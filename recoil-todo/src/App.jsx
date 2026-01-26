import TodoInput from "./components/TodoInput";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="container">
      <h1>📝 Recoil To-Do List</h1>
      <TodoInput />
      <TodoFilters />
      <TodoList />
    </div>
  );
}
