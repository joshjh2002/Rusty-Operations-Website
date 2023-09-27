"use client";

import Navbar from "../../components/navbar.js";
import React, { useEffect, useState } from "react";

import { Converter } from "showdown";

import "./style.css";
import Footer from "@/app/components/footer.js";

export default function ClientComponents({ params, searchParams }) {
  const [content, setContent] = useState("");
  const [id, setId] = useState(params.id);

  useEffect(() => {
    let override = "/news";
    for (let i = 0; i < id.length; i++) {
      override += "/" + id[i];
    }

    let url = "https://articles.rustyoperations.net" + override + ".md";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return "# This article does not exist.";
        }
        return response.text();
      })
      .then((data) => {
        let converter = new Converter();
        let html = converter.makeHtml(data);
        setContent(html);
      })
      .catch((err) => {
        console.error(err);
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
      <Footer />
    </main>
  );
}
