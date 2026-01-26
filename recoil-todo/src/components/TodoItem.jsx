import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtom";

export default function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todoListState);

  return (
    <li>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>

      <button onClick={() =>
        setTodos(old =>
          old.map(t =>
            t.id === todo.id ? { ...t, completed: !t.completed } : t
          )
        )
      }>
        Complete
      </button>

      <button onClick={() =>
        setTodos(old => old.filter(t => t.id !== todo.id))
      }>
        ❌
      </button>
    </li>
  );
}
