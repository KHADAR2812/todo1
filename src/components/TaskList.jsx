import React from 'react';
import { useTasks } from '../services/TaskService';

const TaskList = () => {
  const { tasks, deleteTask, toggleTaskStatus } = useTasks();

  return (
    <div>
      <h3>Task List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.category} - {task.priority} - {task.dueDate}
            <button onClick={() => toggleTaskStatus(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;