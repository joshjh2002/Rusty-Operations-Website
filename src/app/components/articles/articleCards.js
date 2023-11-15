"use client";

import React, { useEffect, useState } from "react";

import { db } from "../../firebaseInit.js";
import { ref, onValue } from "firebase/database";

import Image from "next/image";

import "./articleCards.css";

export default function ArticleCards({ type }) {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState([]);

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

        setArticles(
          temp.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        );

        setSearch(
          temp.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        );
      });
    });
  }, []);

  return (
    <>
      <div className="w-full pb-8">
        <h2>Filters and Search Options</h2>
        <div className="relative h-10 w-full min-w-[200px] rusty-font">
          <input
            className="peer h-full w-full rounded-[7px] border im rusty-font border-[#ff9500] border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#ff9500] placeholder-shown:border-t-[#ff9500] focus:border-2 focus:border-[#ff9500] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white"
            placeholder=""
            onChange={(e) => {
              if (e.target.value.trim() === "") return setSearch(articles);
              setSearch(
                articles.filter((article) =>
                  article.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
              );
            }}
          />
          <label className="before:content[' '] after:content[' '] rusty-font pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#ff9500] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#ff9500] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#ff9500] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#ff9500] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
            Search for articles
          </label>
        </div>
      </div>
      {
        /* Iterates over all the items in the links array stored 
                in links.json and created a HTML element for them */
        search.map((item) => (
          <a href={`${item.link}`} key={item.id} className="card">
            <div className="card-image grid grid-cols-1 place-items-center">
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
