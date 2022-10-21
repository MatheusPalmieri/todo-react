import { List } from "@mui/material";
import { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleEdit = (id, editedTask) => {
    let allArr = [...todos]
    todos.splice(id, 1, {text: editedTask, id: id})
    setTodos(allArr)
  };

  const handleDelete = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <section className="App">
      <Form todoHandler={todoHandler} />
      <List>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} handleEdit={handleEdit} handleDelete={handleDelete} />
        ))}
      </List>
    </section>
  );
}
