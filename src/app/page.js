"use client";

import Welcome from "./components/Welcome";
import Navbar from "./components/NavbarItem.js";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Rusty Operations | Home";
  }, []);

  return (
    <main>
      <div className="bg-[url('/img/rust-banner-notext.png')] bg-cover bg-center bg-fixed">
        <Navbar />
        <div className="content">
          <Welcome />
        </div>
      </div>
    </main>
  );
}
