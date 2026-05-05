import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, refresh }) {

  const [filter, setFilter] = useState("all");

  
  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.done;
    if (filter === "pending") return !todo.done;
    return true; 
  });

  return (
    <div className="max-w-xl mx-auto space-y-4">

      
      <div className="flex justify-center gap-3 mb-4 ">

        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-1 rounded-md text-sm transition
          ${filter === "all" 
            ? "bg-blue-500 text-white" 
            : "bg-gray-200 hover:bg-gray-300"}`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded-md text-sm transition
          ${filter === "completed" 
            ? "bg-green-500 text-white" 
            : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("pending")}
          className={`px-5 py-1 rounded-md text-sm transition
          ${filter === "pending" 
            ? "bg-red-500 text-white" 
            : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Pending
        </button>

      </div>

      
      {filteredTodos.length > 0 ? (
        filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={refresh}
          />
        ))
      ) : (
        <p className="text-center text-gray-400 text-sm">
          No todos found
        </p>
      )}

    </div>
  );
}