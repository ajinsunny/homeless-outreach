import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-transparent">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="logo text-white font-bold text-xl md:text-2xl">
          3rd Saturday Serve in McPherson Square Park
        </div>
        <nav className="space-x-4">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="/donate"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
