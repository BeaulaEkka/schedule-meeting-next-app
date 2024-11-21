import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full h-18 bg-slate-900 text-white items-center p-5">
      <div className="w-[80%] mx-auto ">
        <header className="flex justify-between">
          <Link href="/">Meetx</Link>
          <nav className="flex gap-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/features"}>Features</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </nav>
          <nav className="flex gap-5">
            <Link href={"/signin"}>Sign In</Link>
            <Link href={"/signup"}>Get Started</Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
