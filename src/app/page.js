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
          <div className="grid grid-cols-1 gap-4 mt-16">
            <p>Buttons: Join Server</p>
            <p>Buttons: Join Discord</p>
          </div>
          <div className="grid grid-cols-5 gap-8 mt-16">
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>Steam</p>
          </div>
        </section>
      </div>
    </main>
  );
}
