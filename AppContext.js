import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Complete Activity 6',
      subject: 'CSElec1',
      dueDate: 'December 1, 2026',
      completed: false,
    },
    {
      id: '2',
      title: 'Finalizing System Database',
      subject: 'CS303',
      dueDate: 'December 3, 2026',
      completed: false,
    },
    {
      id: '3',
      title: 'Prepare Operating Systems Notes',
      subject: 'Operating Systems',
      dueDate: 'December 5, 2026',
      completed: true,
    },
  ]);

  const addTask = (newTask) => {
    const task = {
      id: Date.now().toString(),
      ...newTask,
      completed: false,
    };
    setTasks((currentTasks) => [task, ...currentTasks]);
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <AppContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </AppContext.Provider>
  );
}
