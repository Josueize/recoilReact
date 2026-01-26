import { selector } from "recoil";
import { todoListState, todoFilterState } from "../atoms/todoAtom";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const todos = get(todoListState);

    if (filter === "completed") return todos.filter(t => t.completed);
    if (filter === "pending") return todos.filter(t => !t.completed);
    return todos;
  },
});
