"use client";

import React, { useEffect, useState } from "react";

import { Converter } from "showdown";

import "./articleViewer.css";

export default function ArticleViewer({ id, type }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    let override = type;
    for (let i = 0; i < id.length; i++) {
      override += "/" + id[i];
    }

    let url = "https://operationscentre.github.io/articles/" + override + ".md";

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
    <section id="article" className="article">
      <div
        className="block p-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </section>
  );
}
