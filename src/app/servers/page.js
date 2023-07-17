"use client";

import Navbar from "../components/navbar.js";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { db } from "../firebaseInit.js";
import { ref, onValue } from "firebase/database";

export default function Page() {
  const [servers, setServers] = useState([]);
  useEffect(() => {
    document.title = "Rusty Operations | Servers";

    const servers = ref(db, `servers`);
    onValue(servers, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      let temp = [];
      data.forEach((item) => {
        temp.push({ name: item.name, api: item.api });
      });
      setServers(temp);
    });
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
              <div key={server.name} className="card">
                <div className="card-title">
                  <h2>{server.name}</h2>
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
