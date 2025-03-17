import React, { useState } from 'react';
import { useTasks } from '../services/TaskService';
import { useCategories } from '../services/CategoryService';

const TaskInput = ({ existingTask, onEditComplete }) => {
  const { addTask, editTask } = useTasks();
  const { categories } = useCategories();

  const [title, setTitle] = useState(existingTask ? existingTask.title : '');
  const [description, setDescription] = useState(existingTask ? existingTask.description : '');
  const [dueDate, setDueDate] = useState(existingTask ? existingTask.dueDate : '');
  const [priority, setPriority] = useState(existingTask ? existingTask.priority : 'Medium');
  const [category, setCategory] = useState(existingTask ? existingTask.category : categories[0]?.name || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { title, description, dueDate, priority, category, completed: false };
    existingTask ? editTask(existingTask.id, taskData) : addTask({ id: Date.now(), ...taskData });
    if (onEditComplete) onEditComplete();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}
      </select>
      <button type="submit">{existingTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskInput;