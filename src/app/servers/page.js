"use client";

import Servers from "../components/Servers";
import Navbar from "../components/NavbarItem.js";
import React from "react";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/img/rust-banner-notext.png')] bg-cover bg-center bg-fixed">
        <Navbar />
        <div className="content">
          <Servers />
        </div>
      </div>
    </main>
  );
}
