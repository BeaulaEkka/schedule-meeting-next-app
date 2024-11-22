import Link from "next/link";
import React from "react";

import { CalendarPlus } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full h-18   shadow-sm items-center p-5">
      <div className="w-[80%] mx-auto ">
        <header className="flex justify-between items-center">
          <Link href="/" className="font-bold  flex gap-2">
            <span className="text-red-500 font-extrabold text-2xl">
              <CalendarPlus size={36} />
            </span>
            <span className="text-blue-500 text-xl "> Calendar Plus</span>
          </Link>
          <nav className="flex gap-10 items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/features"}>Features</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </nav>
          <nav className="flex gap-5 items-center">
            <Link href={"/signin"}>Sign In</Link>
            <Link
              href={"/signup"}
              className="bg-blue-600  rounded-full text-white px-5 py-2"
            >
              Get Started
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
