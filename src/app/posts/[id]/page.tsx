import React from "react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Post ${id} Details | 100Outputs`,
    description: `This is the details page of post ${id}.`,
  };
}

export default async function PostPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { sort } = await searchParams;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Post Details</h1>

      <p className="mt-4 text-xl">
        記事ID: <span className="text-blue-600 font-bold">{id}</span>
      </p>

      <p className="mt-2 text-lg text-gray-600">Sort Query: {sort}</p>
    </main>
  );
}
