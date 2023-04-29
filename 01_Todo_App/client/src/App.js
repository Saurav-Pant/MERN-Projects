import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

const API_BASE = "http://localhost:3001";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = async () => {
    await fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  };

  const completeTodo = async (id) => {
    const data = await fetch(API_BASE + "/todo/complete/" + id).then((res) =>
      res.json()
    );
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = !data.complete;
        }
        return todo;
      })
    );
  };

  const deleteTodo = async (id) => {
    const data = await fetch(API_BASE + "/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
    setTodos((todos) => todos.filter((todo) => todo._id !== data._id));
  };

  const addTodo = async () => {
    const data = await fetch(API_BASE + "/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newTodo }),
    }).then((res) => res.json());
    setTodos([...todos, data]);
    setPopupActive(false);
    setNewTodo("");
  };

  return (
    <div className="bg-gray-900 flex flex-col items-center h-screen pt-44">
      <h1 className="text-4xl text-red-500 mb-8">To-Do List</h1>

      <div className="bg-white rounded-lg p-8 w-2/3">
        {todos.map((todo) => {
          return (
            <div className="flex items-center mb-4" key={todo._id}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => completeTodo(todo._id)}
                  className="form-checkbox h-6 w-6 text-gray-600"
                />
                {todo.complete ? (
                  <del className="ml-2 text-gray-500">{todo.text}</del>
                ) : (
                  <span className="ml-2 text-gray-700 font-semibold">
                    {todo.text}
                  </span>
                )}
              </label>
              <div
                className="ml-auto text-gray-400 cursor-pointer hover:text-gray-600"
                onClick={() => deleteTodo(todo._id)}
              >
                <MdCancel />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 fixed right-10 bottom-24 rounded-3xl flex items-center justify-center"
        onClick={() => setPopupActive(true)}
      >
        +
      </div>
      {popupActive ? (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-end">
              <button
                className="text-gray-700"
                onClick={() => setPopupActive(false)}
              >
                <MdCancel size={24} />
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-4">Add Task</h3>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="border-2 border-gray-400 px-3 py-2 rounded-lg mb-4"
            />
            <button
              onClick={addTodo}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-6"
            >
              Add Task
            </button>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default App;
