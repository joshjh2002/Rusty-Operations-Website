"use client";

import Navbar from "./components/navbar.js";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.title = "Rusty Operations | Home";
  }, []);

  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <section id="welcome">
          <h1>Rusty Operations</h1>
          <Image
            src="/img/rust-logo-transparent.jpg"
            width={256}
            height={256}
            alt="Logo"
          />
        </section>
      </div>
    </main>
  );
}
