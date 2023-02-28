import React, { useReducer } from "react";
import uuid from "uuid";

const NewTodoForm=({  createTodo })=> {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (userInput.task.trim()) {
      const newTodo = { id: uuid(), task: userInput.task, completed: false };
      createTodo(newTodo);
      setUserInput({ task: "" });
    }
  };

  return (
    <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
      <label htmlFor="task" className="text-lg font-bold">
        Add new todo
      </label>
      <div className="flex">
        <input
          value={userInput.task}
          className="p-1 border border-3"
          onChange={handleChange}
          id="task"
          type="text"
          name="task"
          placeholder="Write the title...."
        />
        <button className="p-1 border rounded border-3 border-gray-500 bg-gray-400 shadow-lg">
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default NewTodoForm;
