import "./style.css";
import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObject = { text: text, id: id };
    setId(id + 1);
    props.todoHandler(todoObject);
    document.getElementById("new").value = null;
  };

  return (
    <div className="form">
      <input
        placeholder="Enter a task"
        type="text"
        className="new-input"
        name="new"
        id="new"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button
        className="new-button"
        onClick={() => {
          todoCreate(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
