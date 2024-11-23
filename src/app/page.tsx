import React from "react";
import Hero from "./components/Hero";

import TrustedCompanies from "./components/TrustedCompanies";
export default function page() {
  return (
    <main className="w-[75%] mx-auto mt-12">
      <Hero />
      
      <TrustedCompanies/>
      
    </main>
  );
}
