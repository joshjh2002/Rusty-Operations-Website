"use client";

import Navbar from "../../components/navbar.js";
import React, { useEffect, useState } from "react";

import { db } from "../../firebaseInit.js";
import { ref, onValue } from "firebase/database";

import { Converter } from "showdown";

import { useSearchParams } from "next/navigation.js";

import "./style.css";
import Footer from "@/app/components/footer.js";

export default function Page({ params, searchParams }) {
  const [content, setContent] = useState("");
  const [id, setId] = useState(useSearchParams().get("id"));
  const [override, setOverride] = useState(useSearchParams().get("override"));

  console.log(params, searchParams);

  useEffect(() => {
    document.title = "Rusty Operations | News";

    if (override == null) {
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
      fetch("https://articles.rustyoperations.net/" + override + ".md")
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
