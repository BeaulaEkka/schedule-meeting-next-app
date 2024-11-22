"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [showLine, setShowLine] = useState(false);
  useEffect(() => {
    setShowLine(true);
  },[]);
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
      </p>
    </section>
  );
}
