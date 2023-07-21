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
          <div className="grid grid-cols-2 grid-gap-4">
            <p>Meet the team</p>
            <p>Buttons: Join Our Server</p>
          </div>
          <div className="grid grid-cols-5 grid-gap-4">
            <p>Discord</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
          <div>
            <p>©2023 Rusty Operations</p>
            <p>*All Rights Reserved. You keep all rights to your material.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
