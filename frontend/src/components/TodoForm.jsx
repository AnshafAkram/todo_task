import { useState } from "react";
import API from "../api";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    API.post("/todos", {
      title,
      description,
      done: false
    }).then(() => {
      setTitle("");
      setDescription("");
      setError(""); 
      onAdd();
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow mb-6 mt-5">
      
      <h2 className="text-4xl font-bold text-black mb-10">
        My To Do List
      </h2>

      
      <input
        className={`w-full border rounded-md p-2 mb-2
        ${error ? "border-red-500" : "border-gray-400"}`}
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError(""); 
        }}
      />

      
      {error && (
        <p className="text-red-500 text-sm mb-2">{error}</p>
      )}

      
      <input
        className="w-full border border-gray-400 rounded-md p-2 mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      
      <button
        onClick={addTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-5 
                   hover:bg-blue-600 active:scale-95 transition"
      >
        + Add Todo
      </button>
    </div>
  );
}