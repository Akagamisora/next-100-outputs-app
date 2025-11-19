import React from "react";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Documentation</h1>
      <p className="mbt-4 text-xl">
        現在のパス:{" "}
        <span className="text-purple-600 font-mono">
          /docs/{slug.join("/")}
        </span>
      </p>
      <p className="text-gray-500 mt-2">
        （配列として受け取っています: {JSON.stringify(slug)}）
      </p>
    </main>
  );
}
