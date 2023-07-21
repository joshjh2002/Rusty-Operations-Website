"use client";

import Navbar from "../components/navbar.js";
import React, { useEffect, useState } from "react";

import { db } from "../firebaseInit.js";
import { ref, onValue } from "firebase/database";

import Image from "next/image";

import "../news/style.css";

export default function Page() {
  const [articles, setArticles] = useState([]);
  const [latest, setLatest] = useState({
    title: "Loading...",
    description: "Loading...",
    timestamp: "Loading...",
  });

  useEffect(() => {
    document.title = "Rusty Operations | News";

    const articleRef = ref(db, `forums`);
    onValue(articleRef, (snapshot) => {
      const data = snapshot.val();
      let temp = [];
      data.forEach((item) => {
        temp.push({
          id: item.id,
          title: item.title,
          description: item.description,
          timestamp: item.timestamp,
          image: item.image,
          alt: item.alt,
        });
      });
      setArticles(temp);
    });
  }, []);

  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <section id="news">
          <h1>Forums</h1>
          <div className="flex justify-center p-4">
            <div className="grid place-items-center grid-cols-1 gap-4">
              {
                /* Iterates over all the items in the links array stored 
                in links.json and created a HTML element for them */
                articles.map((item) => (
                  <a
                    href={`forums/view?id=${item.id}`}
                    key={item.id}
                    className="card"
                  >
                    <div className="card-image">
                      <Image
                        src={item.image}
                        width={200}
                        height={0}
                        className=""
                        alt={item.alt}
                      />
                    </div>
                    <div className="card-content">
                      <h2 className="text-center card-title rusty-font">
                        {`${item.title} (${item.timestamp})`}
                      </h2>
                      <p className="text-center card-text rusty-font">
                        {`${item.description} (${item.timestamp})`}
                      </p>
                    </div>
                  </a>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
