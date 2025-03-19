import Image from "next/image";
import Counter from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js with TypeScript, Tailwind CSS, and Redux
        </h1>

        <div className="mb-4 w-full max-w-md mx-auto">
          <Counter />
        </div>

        <div className="mb-10 w-full max-w-md mx-auto text-center">
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
