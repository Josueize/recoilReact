import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtom";

export default function TodoInput() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos(old => [
      ...old,
      { id: Date.now(), text, completed: false }
    ]);

    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
