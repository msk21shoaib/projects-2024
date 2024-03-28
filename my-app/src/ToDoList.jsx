import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask(){

  }
  function deleteTask(){

  }
  function moveTaskUp(){

  }
  function moveTaskDown(){

  }

  return (
    <>
      <div className="to-do-list">
        <h2>To-Do List</h2>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="move-up-button" onClick={() => moveTaskUp(index)}>
                Move Up
              </button>
              <button className="move-down-button" onClick={() => moveTaskDown(index)}>
                Move Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
