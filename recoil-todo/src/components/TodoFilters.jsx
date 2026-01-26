import { useRecoilState } from "recoil";
import { todoFilterState } from "../atoms/todoAtom";

export default function TodoFilters() {
  const [, setFilter] = useRecoilState(todoFilterState);

  return (
    <div className="filters">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
    </div>
  );
}
