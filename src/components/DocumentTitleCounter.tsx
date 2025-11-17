"use client";

import { useState, useEffect } from "react";

export default function DocumentTitleCounter() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    document.title = `Count: ${count}`;

    console.log("Title Updated!");
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h3 className="text-lg font-medium">Document Title Counter</h3>
      <div className="flex items-center gap-4 mt-2">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
