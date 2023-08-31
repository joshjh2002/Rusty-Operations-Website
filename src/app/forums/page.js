"use client";

import Navbar from "../components/navbar.js";
import React, { useEffect, useState } from "react";

import { db } from "../firebaseInit.js";
import { ref, onValue } from "firebase/database";

import Image from "next/image";

import "../news/style.css";
import Footer from "../components/footer.js";

export default function Page() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = ref(db, `forums`);
    onValue(articleRef, (snapshot) => {
      const data = snapshot.val();
      let temp = [];
      let id = 0;

      data.forEach(async (item) => {
        await fetch(
          `https://articles.rustyoperations.net/forums/${item.file}.json`
        )
          .then((response) => response.json())
          .then((data) => {
            temp.push({
              id,
              title: data.title,
              description: data.description,
              timestamp: data.timestamp,
              image: data.image,
              alt: data.title,
              link: `/forums/${item.file}`,
            });
            id++;
            setArticles(temp);
          });
      });
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
