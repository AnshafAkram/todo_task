import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios.get("http://localhost:8080/api/todos")
      .then(res => setTodos(res.data || []))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,   
      once: true       
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-green-300  flex flex-col items-center py-10">
      

      <div className="w-full max-w-xl space-y-4">
  
        
        <TodoForm onAdd={fetchTodos} />

        
       <TodoList todos={todos} refresh={fetchTodos} />
        

      </div>
    </div>
  );
}

export default App;