"use client";

import Navbar from "../components/navbar.js";
import React, { useEffect, useState } from "react";

import { db } from "../firebaseInit.js";
import { ref, onValue } from "firebase/database";

import Image from "next/image";

import Footer from "../components/footer.js";
import ArticleCards from "../components/articles/articleCards.js";

export default function Page() {
  const [latest, setLatest] = useState({
    title: "Loading...",
    description: "Loading...",
    timestamp: "Loading...",
    link: "/news",
  });

  useEffect(() => {
    const latestRef = ref(db, `service`);
    onValue(latestRef, async (snapshot) => {
      const data = snapshot.val();
      let temp = {};

      let file = data.file;

      await fetch(`https://articles.rustyoperations.net/news/${file}.json`)
        .then((response) => response.json())
        .then((data) => {
          temp = {
            title: data.title,
            description: data.description,
            timestamp: data.timestamp,
            image: data.image,
            alt: data.title,
            link: `/news/${file}`,
          };

          setLatest(temp);
        });
    });
  }, []);

  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <section id="news">
          <h1>News</h1>
          <div className="flex justify-center p-4">
            <div className="grid place-items-center grid-cols-1 gap-4">
              <a href={`${latest.link}`} key="latest-news" className="card">
                <div className="card-image">
                  <Image
                    src={latest.image}
                    width={200}
                    height={0}
                    alt={latest.alt}
                  />
                </div>
                <div className="card-content">
                  <h2 className="text-center card-title rusty-font">
                    {`${latest.title} (${new Date(
                      latest.timestamp
                    ).toLocaleString()})`}
                  </h2>
                  <p className="text-center card-text rusty-font">
                    {latest.description}
                  </p>
                </div>
              </a>
              <div className="w-full border border-solid border-[var(--rust-accent)]"></div>
              <ArticleCards type="news" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
