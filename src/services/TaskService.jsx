import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'EDIT_TASK':
      return {
        tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, ...action.payload.data } : task)
      };
    case 'DELETE_TASK':
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };
    case 'TOGGLE_TASK_STATUS':
      return {
        tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task)
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  const addTask = (task) => dispatch({ type: 'ADD_TASK', payload: task });
  const editTask = (id, data) => dispatch({ type: 'EDIT_TASK', payload: { id, data } });
  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', payload: id });
  const toggleTaskStatus = (id) => dispatch({ type: 'TOGGLE_TASK_STATUS', payload: id });

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, addTask, editTask, deleteTask, toggleTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);