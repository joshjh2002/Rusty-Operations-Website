"use client";

import Navbar from "../../components/navbar.js";
import React, { useEffect, useState } from "react";

import { db, storage } from "../../firebaseInit.js";
import { ref, onValue } from "firebase/database";

import { Converter } from "showdown";

import "./style.css";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const [id, setId] = useState(searchParams.get("id"));
  const [content, setContent] = useState("");

  useEffect(() => {
    document.title = "Rusty Operations | News";

    const fileName = ref(db, `news/${id}/file`);
    onValue(fileName, (snapshot) => {
      const data = snapshot.val();

      if (data == null) {
        setContent("<h1>404</h1>");
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
        <section id="news">
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="article"
          ></div>
        </section>
      </div>
    </main>
  );
}
