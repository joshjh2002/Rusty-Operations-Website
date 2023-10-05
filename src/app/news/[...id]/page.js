"use client";

import React from "react";

import Navbar from "@/app/components/navbar.js";
import Footer from "@/app/components/footer.js";

import ArticleViewer from "@/app/components/articles/articleViewer.js";

export default function ClientComponents({ params }) {
  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <ArticleViewer id={params.id} type="/news" />
      </div>
      <Footer />
    </main>
  );
}
