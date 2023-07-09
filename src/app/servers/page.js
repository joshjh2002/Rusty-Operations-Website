"use client";

import Navbar from "../components/navbar.js";
import React, { useEffect } from "react";
import Image from "next/image";

import { servers } from "../data/servers.json";

export default function Page() {
  useEffect(() => {
    document.title = "Rusty Operations | Servers";
  }, []);

  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <section id="Servers">
          <h1>Servers</h1>
          <div className="card-container">
            {servers.map((server) => (
              <div className="card">
                <div className="card-title">
                  <h2>{server}</h2>
                </div>
                <div className="card-image">
                  <Image
                    src="/img/rust-logo.jpg"
                    width={200}
                    height={200}
                    alt="Rusty Operations Logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
