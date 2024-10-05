import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center">
        Welcome to Our Jewelry Website
      </h1>
      <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl">
        Welcome to <span className="font-semibold text-blue-700">Mars Jewelry</span>, where exquisite craftsmanship meets modern convenience. Whether you&apos;re searching for a statement piece for a special occasion or timeless jewelry to cherish every day, our app brings the luxury of fine jewelry to your fingertips.
      </p>

      {/* Embedded YouTube video */}
      <div className="mt-8">
        <iframe
          width="600"
          height="340"
          src="https://www.youtube.com/embed/3mzx_cvJBKE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Button Links */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/about"
          className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:scale-105 text-center"
        >
          Learn more about us
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-full shadow-md transition duration-300 hover:bg-purple-600 hover:shadow-lg focus:ring-4 focus:ring-purple-300 transform hover:scale-105 text-center"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
