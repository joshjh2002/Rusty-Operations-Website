"use client";

import Navbar from "./components/navbar.js";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.title = "Rusty Operations | Home";
  }, []);

  const redirectTo = (url, blank) => () => {
    window.open(url, blank ? "_blank" : "_self");
  };

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
          <div className="grid grid-cols-1 gap-4 mt-16 place-items-center">
            <button
              onClick={redirectTo("steam://connect/64.40.9.19:28024", true)}
              class="button-85"
              role="button"
            >
              Join our Server
            </button>
            <button
              onClick={redirectTo("https://discord.gg/5VKTm5upwA", true)}
              class="button-85"
              role="button"
            >
              Join Our Discord
            </button>
            <button
              onClick={redirectTo("/about", false)}
              class="button-85 mt-8"
              role="button"
            >
              Learn More...
            </button>
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
