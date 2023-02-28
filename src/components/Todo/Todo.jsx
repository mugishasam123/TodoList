import React, { useState } from "react";

const Todo = ({ todo, remove, update, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = (evt) => {
    remove(evt.target.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (evt) => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = (evt) => {
    setTask(evt.target.value);
  };
  const toggleCompleted = (evt) => {
    toggleComplete(evt.target.id);
  };

  let result;

  if (isEditing) {
    result = (
      <div className="mb-2">
        <form className="" onSubmit={handleUpdate}>
          <input
            onChange={handleChange}
            value={task}
            type="text"
            className="p-1 text-xl"
          />
          <button>
            <i className="fas fa-check text-xl ml-4" />
          </button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="flex justify-between bg-gray-300 mb-2 p-2 rounded">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "text-xl line-through" : "text-xl"}
        >
          {todo.task}
        </li>
        <div className="Todo-button text-gray-900">
          <button onClick={toggleFrom} className="mr-5">
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleClick}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
  return result;
};

export default Todo;
