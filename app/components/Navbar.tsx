import Link from "next/link";
import { AuthModel } from "./AuthModal";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href="/">
        <h4 className="text-3xl font-semibold">
          Save<span className="text-primary">MySpot</span>
        </h4>
      </Link>

      <div className="flex flex-row gap-10 items-center font-semibold">
        <Link href="#about">
          <h2>About</h2>
        </Link>
        <Link href="#prices">
          <h2>Prices</h2>
        </Link>
        <Link href="#contact">
          <h2>Contact Us</h2>
        </Link>
        <AuthModel />
      </div>
    </div>
  );
}
