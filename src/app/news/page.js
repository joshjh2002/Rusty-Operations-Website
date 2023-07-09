"use client";

import News from "../components/News";
import Navbar from "../components/NavbarItem.js";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Rusty Operations | News";
  }, []);

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
