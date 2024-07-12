import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="logo">3rd Saturday Serve in McPherson Square Park</div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/donate">
          <a>Donate</a>
        </Link>
      </nav>
    </header>
  );
}
