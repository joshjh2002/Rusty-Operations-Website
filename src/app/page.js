"use client";

import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import React from "react";
import Image from "next/image";
import LiveData from "./components/livedata.js";
import Socials from "./components/socials.js";

import Images from "@/app/images.js";

export default function Home() {
  const redirectTo = (url, blank) => () => {
    window.open(url, blank ? "_blank" : "_self");
  };

  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <section id="welcome">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            <div className="flex justify-center">
              <Image
                src={`https://www.rustyoperations.net${Images.logo}`}
                width={384}
                height={384}
                alt="Logo"
                className="rounded-full"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:mt-0 mt-16 place-items-center">
              <button
                onClick={redirectTo("steam://connect/64.40.9.19:28024", true)}
                className="button-85"
                role="button"
              >
                Join our Server
              </button>
              <button
                onClick={redirectTo("https://discord.gg/5VKTm5upwA", true)}
                className="button-85"
                role="button"
              >
                Join Our Discord
              </button>
              <button
                onClick={redirectTo("/about", false)}
                className="button-85 mt-8"
                role="button"
              >
                Learn More...
              </button>
            </div>
          </div>
          <LiveData />
          <Socials />
        </section>
      </div>
      <Footer />
    </main>
  );
}
