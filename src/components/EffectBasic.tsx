"use client";

import { useEffect } from "react";

export default function EffectBasic() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <p>useEffect Basic Test. Check the console.</p>
    </div>
  );
}
