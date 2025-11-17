import React from "react";

type CardProps = {
  children: React.ReactNode;
};

export default function Card(props: CardProps) {
  const { children } = props;

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm bg-white">
      {children}
    </div>
  );
}
