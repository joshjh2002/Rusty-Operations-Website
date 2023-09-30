"use client";

import React, { useEffect, useState } from "react";

import { db } from "../../firebaseInit.js";
import { ref, onValue } from "firebase/database";

import Image from "next/image";

import "./articleCards.css";

export default function ArticleCards({ type }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = ref(db, `${type}`);
    onValue(articleRef, (snapshot) => {
      const data = snapshot.val();
      let temp = [];
      let id = 0;

      data.forEach(async (item) => {
        let info = await fetch(
          `https://articles.rustyoperations.net/${type}/${item.file}.json`
        );

        if (!info.ok) return;

        let json = await info.json();

        temp.push({
          id,
          title: json.title,
          description: json.description,
          timestamp: json.timestamp,
          image: json.image,
          alt: json.title,
          link: `/${type}/${item.file}`,
        });

        id++;

        if (id == data.length - 1) await setArticles(temp.reverse());
      });
    });
  }, []);

  return (
    <>
      {
        /* Iterates over all the items in the links array stored 
                in links.json and created a HTML element for them */
        articles.map((item) => (
          <a href={`${item.link}`} key={item.id} className="card">
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
                {`${item.title} (${new Date(
                  item.timestamp
                ).toLocaleDateString()})`}
              </h2>
              <p className="text-center card-text rusty-font">
                {`${item.description}`}
              </p>
            </div>
          </a>
        ))
      }
    </>
  );
}
