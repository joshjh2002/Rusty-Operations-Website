"use client";

import News from "../components/News";
import Navbar from "../components/NavbarItem.js";
import React from "react";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="content">
        <News />
      </div>
    </main>
  );
}
