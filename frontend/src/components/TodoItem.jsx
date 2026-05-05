import { useState } from "react";
import API from "../api";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";

export default function TodoItem({ todo, onUpdate }) {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  
  const toggleDone = () => {
    API.patch(`/todos/${todo.id}/done`).then(onUpdate);
  };

  
  const deleteTodo = () => {
    API.delete(`/todos/${todo.id}`).then(onUpdate);
  };

  
  const editTodo = () => {
    setIsEditing(true);
  };

  
  const saveEdit = () => {
    if (!title || !description) return;

    API.put(`/todos/${todo.id}`, {
      title,
      description,
      done: todo.done
    }).then(() => {
      setIsEditing(false);
      onUpdate();
    });
  };

  
  const cancelEdit = () => {
    setTitle(todo.title);
    setDescription(todo.description);
    setIsEditing(false);
  };

  return (
    <li
      data-aos="zoom-in"
      className={`flex justify-between items-start gap-6 px-6 py-5 rounded-2xl shadow-md border transition
      ${todo.done 
        ? "bg-yellow-50 border-green-200" 
        : "bg-white border-gray-100"}`}
    >

      
      <div className="flex items-start gap-4 w-full">

        
        <button
          onClick={toggleDone}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition
          ${todo.done ? "bg-green-500" : "bg-gray-300"}`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition
            ${todo.done ? "translate-x-6" : "translate-x-0"}`}
          />
        </button>

        
        <div className="w-full">

          {isEditing ? (
            <>
              
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded px-2 py-1 text-sm mb-2"
              />

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded px-2 py-1 text-sm"
              />

              
              <div className="flex gap-2 mt-2">
                <button
                  onClick={saveEdit}
                  className="text-green-600 hover:scale-110 transition"
                >
                  <FaCheck />
                </button>

                <button
                  onClick={cancelEdit}
                  className="text-red-500 hover:scale-110 transition"
                >
                  <FaTimes />
                </button>
              </div>
            </>
          ) : (
            <>
              
              <h2
                className={`text-lg font-semibold
                ${todo.done ? "line-through text-gray-400" : "text-gray-800"}`}
              >
                {todo.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {todo.description}
              </p>
            </>
          )}
        </div>
      </div>

      {/* right side */}
      {!isEditing && (
        <div className="flex flex-col items-end gap-2">

        
          <div className="flex items-center gap-3">

            <button
              onClick={editTodo}
              className="text-blue-500 hover:text-blue-700 transition active:scale-90"
            >
              <FaEdit size={16} />
            </button>

            <button
              onClick={deleteTodo}
              className="p-2 rounded-full bg-red-500 text-white 
              hover:bg-red-600 active:scale-90 transition"
            >
              <FaTrash size={14} />
            </button>

          </div>

          
          <p
            className={`text-xs font-bold
            ${todo.done ? "text-green-600" : "text-red-500"}`}
          >
            {todo.done ? "Completed" : "Pending"}
          </p>

        </div>
      )}
    </li>
  );
}