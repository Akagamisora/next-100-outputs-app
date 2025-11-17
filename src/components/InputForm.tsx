"use client";

import { useState } from "react";

export default function InputForm() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-medium">Input Form</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded w-full mt-2"
        placeholder="Type something..."
      />
      <p className="mt-2">
        You are typing: <span className="font-bold">{inputValue}</span>
      </p>
    </div>
  );
}
