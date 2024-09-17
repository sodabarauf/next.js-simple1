import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600">
        Welcome to Our Simple Website
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        This is a simple website built with Next.js, TypeScript, and Tailwind
        CSS.
      </p>
      <div className="mt-8">
        <Link href="/about" className="text-blue-500 hover:underline">
          Learn more about us
        </Link>
        <br />
        <Link href="/contact" className="text-blue-500 hover:underline">
          Contact us
        </Link>
      </div>
    </div>
  );
}
