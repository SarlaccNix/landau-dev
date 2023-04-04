import "./navbar.css";
import Image from "next/image";

export default function Footer() {
  return (
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
    </div>
  );
}
