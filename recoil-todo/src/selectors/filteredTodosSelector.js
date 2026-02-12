import { selector } from "recoil";
import { todoListState, todoFilterState } from "../atoms/todoAtom";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const todos = get(todoListState);
    const filter = get(todoFilterState);

    if (filter === "completed") return todos.filter(t => t.completed);
    if (filter === "pending") return todos.filter(t => !t.completed);
    return todos;
  },
});
