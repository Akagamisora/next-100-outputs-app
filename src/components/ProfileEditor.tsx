"use client";

import { useState } from "react";

type Profile = {
  name: string;
  email: string;
};

export default function ProfileEditor() {
  const [profile, setProfile] = useState<Profile>({
    name: "Guest",
    email: "guest@example.com",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow space-y-2">
      <input
        type="text"
        value={profile.name}
        onChange={handleNameChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        value={profile.email}
        onChange={handleEmailChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <p>
        Name: {profile.name}, Email: {profile.email}
      </p>
    </div>
  );
}
