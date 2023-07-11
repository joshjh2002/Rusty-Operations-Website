"use client";

import Navbar from "../components/navbar.js";
import React, { useEffect } from "react";

import { db } from "../firebaseInit.js";
import { ref, onValue } from "firebase/database";

export default function Page() {
  useEffect(() => {
    document.title = "Rusty Operations | News";

    const usernameRef = ref(db, `news`);
    onValue(usernameRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);

  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <section id="news">
          <h1>News</h1>
        </section>
      </div>
    </main>
  );
}
