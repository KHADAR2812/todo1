import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import CategoryList from './CategoryList';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <CategoryList />
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Dashboard;