import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="logo">
          <Image
            src="/logo.webp"
            alt="3rd Saturday Serve Logo"
            width={100}
            height={100}
            className="w-auto h-12 md:h-16"
          />
        </Link>
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSeoEctmda3iRUD4eFkLAQFuyqS3xVp8Wvjbtjs6xRCZGUUDmQ/viewform?usp=pp_url"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="https://www.amazon.com/hz/wishlist/ls/3W0312UMZS82W?ref_=wl_share"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
