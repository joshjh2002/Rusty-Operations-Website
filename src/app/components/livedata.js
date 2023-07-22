"use client";
import { set } from "firebase/database";
import React, { useEffect, useState } from "react";

export default function LiveData() {
  const [data, setData] = useState({
    data: {
      attributes: {
        name: "Loading...",
        ip: "Loading...",
        port: "Loading...",
        status: "Loading...",
        players: "Loading...",
        details: { rust_last_wipe: "Loading..." },
      },
    },
  });
  useEffect(() => {
    fetch("https://api.battlemetrics.com/servers/18551370")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section id="live-data" className="">
      <footer className="bg-[#4449] mt-16 shadow-lg rounded-xl flex justify-center items-center p-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center">{data.data.attributes.name}</h2>
          <div className="grid sm:grid-cols-4 grid-cols-2 pt-2">
            <p>{`IP: ${data.data.attributes.ip}:${data.data.attributes.port}`}</p>
            <p>{`Status: ${
              data.data.attributes.status.charAt(0).toUpperCase() +
              data.data.attributes.status.slice(1)
            }`}</p>
            <p className="pt-4 sm:pt-0">{`Last Wipe: ${new Date(
              data.data.attributes.details.rust_last_wipe
            ).toLocaleDateString()}`}</p>
            <p className="pt-4 sm:pt-0">{`Players: ${data.data.attributes.players}`}</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
