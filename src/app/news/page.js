"use client";

import News from "../components/News";
import Navbar from "../components/NavbarItem.js";
import React from "react";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/img/rust-banner-notext.png')] bg-cover bg-center bg-fixed">
        <Navbar />
        <div className="content">
          <News />
        </div>
      </div>
    </main>
  );
}
