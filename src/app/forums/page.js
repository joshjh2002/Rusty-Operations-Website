"use client";

import Navbar from "../components/navbar.js";
import React from "react";

import Footer from "../components/footer.js";
import ArticleCards from "../components/articles/articleCards.js";

export default function Page() {
  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <section id="news">
          <h1>Forums</h1>
          <div className="flex justify-center p-4">
            <div className="grid place-items-center grid-cols-1 gap-4">
              <ArticleCards type="forums" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
