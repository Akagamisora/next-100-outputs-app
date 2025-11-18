"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 p-4 bg-gray-100 shadow-md">
      <Link
        href="/"
        className={
          pathname === "/"
            ? "text-red-500 font-bold"
            : "text-blue-500 hover:underline"
        }
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about"
            ? "text-red-500 font-bold"
            : "text-blue-500 hover:underline"
        }
      >
        About
      </Link>
    </nav>
  );
}
