"use client";

import React from "react";

export default function ClickButton() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("クリックされました");
  };

  return (
    <button
      className="bg-purple-500 text-white px-4 py-2 rounded"
      onClick={handleClick}
    >
      クリックしてください
    </button>
  );
}
