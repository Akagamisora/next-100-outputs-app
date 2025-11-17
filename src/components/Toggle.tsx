"use client";

import { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="p-4 bg-gray-500 rounded-lg shadow">
      <button
        onClick={handleToggle}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Toggle
      </button>

      {isVisible && <p className="mt-4 text-lg font-medium">Now you see me!</p>}
    </div>
  );
}
