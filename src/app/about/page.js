"use client";

import Navbar from "../components/navbar.js";
import React from "react";
import Image from "next/image";

import MeetTheTeam from "../components/meet-the-team.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <main>
      <div className="bg"></div>
      <Navbar />
      <div className="content">
        <section id="welcome">
          <h1>Welcome to Rusty Operations!</h1>
          <div className="grid md:grid-cols-1 mt-8 mb-8">
            <div className="flex items-center justify-center">
              <p>
                Our server brings a premium experience, offering a mixture of
                rebalanced gameplay, premium plugins and new maps. For US and
                UK/EU players!
                <br />
                <br />
                Rusty Operations is a PVP modded experience that focuses on
                keeping the authentic feel from vanilla, where you can play
                knowing everything has been balanced and tested. We have many
                functionalities including: a real time voting system for 1 of
                our 7 maps, plenty of quality-of-life improvements to the core
                game, and many more. Here, you can expect a fully dedicated
                experience in both the United Kingdom and United States of
                America with staff being in both regions too. We have a very
                friendly and respectful community backed through Discord and
                that has been growing since 2019.
                <br />
                <br />
                We wipe biweekly.
                <br />
                <br />
                The communities wants and needs are always at great interest to
                us, as we like to shape the community and all of it's features
                around it's members. This means that we love feedback on
                anything, whether it's a game server, the Discord server or the
                content we put out, we want to know how you feel about the way
                the community is going. We are always more than happy to have
                more people join the family so if you are interested make sure
                to join the heart of our community, our Discord server. We'd
                love to welcome you!
              </p>
            </div>
          </div>
          <MeetTheTeam />
        </section>
      </div>
      <Footer />
    </main>
  );
}
