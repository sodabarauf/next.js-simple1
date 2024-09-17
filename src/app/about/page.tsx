import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        This website was created as part of a learning project for Next.js,
        TypeScript, and Tailwind CSS.
      </p>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
