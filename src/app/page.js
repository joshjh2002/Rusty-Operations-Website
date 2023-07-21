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
          <div className="flex justify-center">
            <Image
              src="/img/rust-logo.jpg"
              width={384}
              height={384}
              alt="Logo"
              className="rounded-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
