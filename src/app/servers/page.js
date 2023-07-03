"use client";

import Servers from "../components/Servers";
import Navbar from "../components/NavbarItem.js";
import React from "react";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="content">
        <Servers />
      </div>
    </main>
  );
}
