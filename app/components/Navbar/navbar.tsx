import Link from "next/link";
import "./navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Image
            src="/vercel.svg"
            alt="Brand"
            width={100}
            height={24}
            priority
          />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
