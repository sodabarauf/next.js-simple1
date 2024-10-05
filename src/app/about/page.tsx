import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center">
        About Us
      </h1>
      <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl">
        We are committed to ethical sourcing and sustainability, ensuring that each piece is crafted with care for both people and the planet. Explore our handpicked collections featuring a blend of classic designs and contemporary trends. From radiant rings that symbolize love and commitment to elegant earrings that add the perfect finishing touch, Mars Jewelry offers something for every style and taste. Each piece is crafted with meticulous attention to detail, using only the finest materials like gold, silver, diamonds, and gemstones.
      </p>

      {/* Images Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img
          src="https://www.bing.com/th?id=OIP.bT6r6Wdmg6HAnSXKNUXfTQHaE8&w=194&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="Jewelry Collection 1"
          className="rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        />
        <img
          src="https://www.bing.com/th?id=OIP.rE-h7TXaS1mjCeZLGliN_wHaGy&w=142&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="Jewelry Collection 2"
          className="rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        />
        <img
          src="https://www.bing.com/th?id=OIP.xvaDJA1Ah4CDL4f_y3Rr8QHaE7&w=238&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="Jewelry Collection 3"
          className="rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        />
      </div>

      {/* Back to Home Link */}
      <div className="mt-10">
        <Link href="/" className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:scale-105">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
