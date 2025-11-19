import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Post Details</h1>

      <p className="mt-4 text-xl">
        記事ID: <span className="text-blue-600 font-bold">{id}</span>
      </p>
    </main>
  );
}
