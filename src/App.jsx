import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { TaskProvider } from './services/TaskService';
import { CategoryProvider } from './services/CategoryService';

function App() {
  return (
    <TaskProvider>
      <CategoryProvider>
        <div className="App">
          <header className="App-header">
            <h1>To-Do List</h1>
          </header>
          <main className="container">
            <Dashboard />
          </main>
        </div>
      </CategoryProvider>
    </TaskProvider>
  );
}

export default App;
