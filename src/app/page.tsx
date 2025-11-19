"use client";

import Card from "../components/Card";
import Link from "next/link";
import Timer from "../components/Timer";
import Toggle from "../components/Toggle";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const books = [
    { id: 1, title: "Next.js入門", author: "著者A" },
    { id: 2, title: "React入門", author: "著者B" },
    { id: 3, title: "Vue.js入門", author: "著者C" },
  ];

  const handleLogin = () => {
    console.log("ログイン処理中...");
    setTimeout(() => {
      console.log("ログイン成功！ Aboutページへ遷移します。");
      router.push("/about");
    }, 2000);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-12">
      <h1 className="text-4xl font-bold text-indigo-700">Start 100 Outputs</h1>
      <p className="text-xl text-gray-500 mt-4">
        Step 2: React & Tailwind Basics
      </p>

      <Link href="/about" className="mt-4 text-blue-500 hover:underline">
        Aboutページへ
      </Link>

      <button
        onClick={handleLogin}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow"
      >
        ログイン（2秒後に遷移）
      </button>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <Card key={book.id}>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          </Card>
        ))}
      </div>
      <Toggle />
      <Timer />
    </main>
  );
}
