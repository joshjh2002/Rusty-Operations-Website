"use client";

import Servers from "../components/Servers";
import Navbar from "../components/navbar.js/index.js";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Rusty Operations | Servers";
  }, []);

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
