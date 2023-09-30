"use client";

import React from "react";

import ArticleViewer from "@/app/components/articles/articleViewer.js";

export default function ClientComponents({ params }) {
  return <ArticleViewer id={params.id} type="/news" />;
}
