"use client";

import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer cleared!");
    };
  }, []);

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow">
      <h3 className="text-lg fount-medium">Timer</h3>
      <p className="text-3xl font-bold mt-2">{seconds} s</p>
    </div>
  );
}
