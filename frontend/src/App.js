import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/todos")
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Todo App
      </h1>

      <div className="max-w-xl mx-auto space-y-3">
        {todos.map(todo => (
          <div
            key={todo.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{todo.title}</h2>
              <p className="text-sm text-gray-500">
                {todo.description}
              </p>
            </div>

            <span
              className={
                todo.done
                  ? "text-green-600 font-bold"
                  : "text-red-500 font-bold"
              }
            >
              {todo.done ? "Done" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;