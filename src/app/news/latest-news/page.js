"use client";

import Navbar from "../../components/navbar.js";
import React, { useEffect, useState } from "react";

import { db } from "../../firebaseInit.js";
import { ref, onValue } from "firebase/database";

import { Converter } from "showdown";

import "../view/style.css";

export default function Page() {
  const [content, setContent] = useState("");

  useEffect(() => {
    document.title = "Rusty Operations | Latest News";

    const fileName = ref(db, `latest`);
    onValue(fileName, (snapshot) => {
      const data = snapshot.val();
      console.log(data);

      if (data == null) {
        setContent("<h1>This article does not exist</h1>");
        return;
      }

      fetch(data) // Your POST endpoint
        .then((response) => response.text()) // If the response is a JSON object return it parsed, otherwise return the response as text
        .then((data) => {
          let converter = new Converter();
          let html = converter.makeHtml(data);
          setContent(html);
        });
    });
  }, []);

  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <section id="article" className="article">
          <div
            className="block p-4"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </section>
      </div>
    </main>
  );
}
