"use client";

import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
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
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
