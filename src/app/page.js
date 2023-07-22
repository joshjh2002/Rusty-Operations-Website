"use client";

import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.title = "Rusty Operations | Home";
  }, []);

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
                src="/img/rust-logo.jpg"
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
          <div className="grid grid-cols-5 gap-8 mt-16 bg-[#4449] rounded-xl p-8">
            <a
              href="https://twitter.com/rustyoperations"
              target="_blank"
              className="flex justify-center"
            >
              <Image
                src="/img/socials/twitter.png"
                width={64}
                height={64}
                alt="Twitter"
                className="filter invert"
              />
            </a>
            <a
              href="https://www.facebook.com/RustyOperations"
              target="_blank"
              className="flex justify-center"
            >
              <Image
                src="/img/socials/facebook.png"
                width={64}
                height={64}
                alt="Facebook"
                className="filter invert"
              />
            </a>
            <a
              href="https://www.instagram.com/rusty_operations/"
              target="_blank"
              className="flex justify-center"
            >
              <Image
                src="/img/socials/instagram.png"
                width={64}
                height={64}
                alt="Instagram"
                className="filter invert"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCm-FUo4TagET2kA-JpVpwWw"
              target="_blank"
              className="flex justify-center"
            >
              <Image
                src="/img/socials/youtube.png"
                width={64}
                height={64}
                alt="Youtube"
                className="filter invert"
              />
            </a>
            <a
              href="https://steamcommunity.com/groups/rusty-operations"
              target="_blank"
              className="flex justify-center"
            >
              <Image
                src="/img/socials/steam.png"
                width={64}
                height={64}
                alt="Steam"
                className="filter invert"
              />
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
