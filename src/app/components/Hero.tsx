"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CirclePlay } from "lucide-react";
export default function Hero() {
  const [showLine, setShowLine] = useState(false);
  useEffect(() => {
    setShowLine(true);
  }, []);
  return (
    <section className="text-center flex flex-col gap-5">
      <header>
        <h1 className="text-5xl font-bold leading-snug ">
          Scheduling{" "}
          <span
            className={
              "text-blue-600 cool-underline " +
              (showLine ? "show-underline" : "")
            }
          >
            made Simple
          </span>{" "}
          <br />
          for people like you
        </h1>
      </header>
      <p>
        Most Scheduling apps are simple but ours is even more simpler. It is
        also open source.
      </p>{" "}
      <section className="mt-4 flex gap-4 justify-center items-center">
        <Link
          href={"/"}
          className="bg-black text-white px-4 py-2 rounded-full shadow-sm"
        >
          Get Started for free
        </Link>
        <Link
          href={"/"}
          className="border border-gray-300 rounded-full px-4 py-2 gap-2 inline-flex text-gray-500 shadow-sm"
        >
          <CirclePlay />
          Watch a Video
        </Link>
      </section>
    </section>
  );
}
