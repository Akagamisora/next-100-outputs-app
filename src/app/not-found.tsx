import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800">404 Not Found</h2>
      <p className="mt-4 text-gray-600">
        お探しのページは見つかりませんでした。
      </p>

      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        トップへ戻る
      </Link>
    </div>
  );
}
