import React, { useState } from "react";
import Todo from "../Todo/Todo";
import Input from "../Input/Input";
import uuid from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: uuid(), task: "Go to gym", completed: false },
    { id: uuid(), task: "Finish daily task", completed: true },
  ]);

  const create = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map((todo) => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col border bg-gray-200 shadow-xl p-6 rounded">
        <h1 className="text-2xl font-bold">
          Todo List{" "}
          <span className="block font-normal  italic text-sm">
            Daily tasks to accomplish
          </span>
        </h1>
        <hr className="h-1 bg-gray-400" />
        {todos.length === 0 ? (
          <ul>
            <li>No todo found!</li>
          </ul>
        ) : (
          <>
            <ul>{todosList}</ul>
            <hr className="h-1 bg-gray-400" />
            <button
              onClick={clearCompleted}
              className="self-center p-1 border rounded border-3 border-gray-500 bg-gray-400 shadow-lg mt-12"
            >
              Clear All completed
            </button>
          </>
        )}
        <Input createTodo={create} />
      </div>
    </div>
  );
};

export default TodoList;
