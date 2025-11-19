import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 100Outputs",
  description: "This is the about page of our amazing application.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">This is the about page.</p>
    </main>
  );
}
