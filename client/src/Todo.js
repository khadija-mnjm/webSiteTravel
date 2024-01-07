import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from "styled-components";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  `;

  const HeaderText = styled.h3`
    margin-right: 10px;
    animation: ${bounce} 1s infinite;
  `;

  const StyledAppContainer = styled.div`
    margin: 20px;
    color: #333; /* or any color you prefer for primary text */
    background-color: #f7f7f7; /* or any background color you prefer */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;

  const handleAddTodo = () => {
    if (inputRef.current) {
      const text = inputRef.current.value;
      const newItem = { id: Date.now(), completed: false, text };
      setTodos([...todos, newItem]);
      inputRef.current.value = "";
    }
  };

  const handleItemDone = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEditItem = (id) => {
    setEditingId(id);
    const taskToEdit = todos.find((todo) => todo.id === id);
    const taskText = taskToEdit ? taskToEdit.text : "";
    setEditText(taskText);
    if (inputRef.current) {
      inputRef.current.value = taskText;
    }
  };

  const handleSaveEdit = () => {
    const newTodos = todos.map((todo) =>
      todo.id === editingId ? { ...todo, text: editText } : todo
    );
    setTodos(newTodos);
    setEditingId(null);
    setEditText("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <StyledAppContainer className="container mt-4">
      <HeaderText>What is your plan Today :</HeaderText>
      <div className="App container mt-4">
        <h2 className="mb-4">To Do List</h2>
        <div className="to-do-container">
          <ul className="list-group">
            {todos.map(({ id, text, completed }) => (
              <div className="item" key={id}>
                <li
                  className={`list-group-item ${
                    completed ? "list-group-item-success" : ""
                  }`}
                  onClick={() => handleItemDone(id)}
                >
                  {editingId === id ? (
                    <input
                      ref={inputRef}
                      className="form-control input-edit"
                      placeholder="Edit item..."
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  ) : (
                    text
                  )}
                </li>
                <div className="item-buttons mt-2">
                  {editingId === id ? (
                    <button
                      className="btn btn-success mr-2"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <div className="icondiv">
                        <FontAwesomeIcon
                          className="icon text-primary mr-2"
                          icon={faEdit}
                          onClick={() => handleEditItem(id)}
                        />
                      </div>
                      <div className="icondiv1">
                        <FontAwesomeIcon
                          className="icon text-danger"
                          icon={faTrash}
                          onClick={() => handleDeleteItem(id)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </ul>
          <input
            ref={inputRef}
            className="form-control input-add mt-3"
            placeholder="Enter item..."
          />
          <button className="btn btn-primary mt-2" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>
    </StyledAppContainer>
  );
}

export default Todo;
