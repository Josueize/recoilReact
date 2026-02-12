import React from "react";
import { useRecoilState } from "recoil";
import { todoFilterState } from "../atoms/todoAtom";

export default function TodoFilters() {
  const [filter, setFilter] = useRecoilState(todoFilterState);

  return (
    <div className="flex gap-2 mb-2">
      <button
        className={`px-2 py-1 border rounded ${
          filter === "all" ? "bg-gray-200" : ""
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`px-2 py-1 border rounded ${
          filter === "completed" ? "bg-gray-200" : ""
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`px-2 py-1 border rounded ${
          filter === "pending" ? "bg-gray-200" : ""
        }`}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>
    </div>
  );
}
