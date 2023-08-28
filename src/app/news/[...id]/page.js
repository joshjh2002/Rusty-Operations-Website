"use client";

import Navbar from "../../components/navbar.js";
import React, { useEffect, useState } from "react";

import { db } from "../../firebaseInit.js";
import { ref, onValue } from "firebase/database";

import { Converter } from "showdown";

import "./style.css";
import Footer from "@/app/components/footer.js";

export default function ClientComponents({ params, searchParams }) {
  const [content, setContent] = useState("");
  const [id, setId] = useState(params.id);
  const [override, setOverride] = useState(searchParams.override);

  useEffect(() => {
    if (!isNaN(id)) {
      const fileName = ref(db, `news/${id}/file`);
      onValue(fileName, (snapshot) => {
        const data = snapshot.val();

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
    } else {
      let override = "/news";
      for (let i = 0; i < id.length; i++) {
        override += "/" + id[i];
      }
      let url = "https://articles.rustyoperations.net" + override + ".md";

      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          let converter = new Converter();
          let html = converter.makeHtml(data);
          setContent(html);
        });
    }
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
      <Footer />
    </main>
  );
}
