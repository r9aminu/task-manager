import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = (event) => {
    event.preventDefault();
    if (!taskTitle.trim()) return;
    const newTask = {
      title: taskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskTitle('');
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="task-manager">
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          className="task-input"
          placeholder="write content"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit" className="task-add-button">Add Task</button>
      </form>
      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={task.id} className="task-item">
            <span className="task-number">{index + 1}.</span>
            <span className="task-title">{task.title}</span>
            <span className="task-status">{task.completed ? 'Completed' : 'Incomplete'}</span>
            <button onClick={() => toggleTaskCompletion(task.id)} className="toggle-button">Status</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskManager;
