"use client";

import { useState } from "react";

type Task = {
  id: number;
  text: string;
};

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const taskToAdd: Task = {
      id: Date.now(),
      text: newTask,
    };
    setTasks([...tasks, taskToAdd]);
    setNewTask("");
  };

  const handleDeleteTask = (idToDelete: number) => {
    const remainingTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(remainingTasks);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded flex-grow"
          placeholder="New task..."
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
      <ul className="list-disc list-inside mt-4 space-y-1">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center">
            <span>{task.text}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 text-ehite px-2 py-1 rounded text-xs"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
