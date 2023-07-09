"use client";

import Navbar from "../components/navbar.js";
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
          <section id="Servers">
            <h1>Servers</h1>
          </section>
        </div>
      </div>
    </main>
  );
}
