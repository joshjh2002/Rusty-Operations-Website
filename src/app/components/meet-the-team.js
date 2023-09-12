"use client";
import React from "react";
import Image from "next/image";

import "./meet-the-team.css";

export default function MeetTheTeam() {
  const team = [
    {
      img: "/img/avatars/ambitious_gear.webp",
      name: "Ambitious_Gear",
      role: "Rust Server Admin",
    },
    {
      img: "/img/avatars/jackaltaco.webp",
      name: "JackalTaco",
      role: "Rust Server Admin",
    },
    {
      img: "/img/avatars/josh.gif",
      name: "joshjh2002",
      role: "Community Manager",
    },
    {
      img: "/img/avatars/andyhatter.webp",
      name: "AndyHatter",
      role: "Graphic Designer",
    },
    {
      img: "/img/avatars/paco.webp",
      name: "Paco",
      role: "Rust Server Admin",
    },
    {
      img: "/img/avatars/krazywabbit.webp",
      name: "KrazyWabb1t",
      role: "Rust Server Admin",
    },
    {
      img: "/img/avatars/moleman.webp",
      name: "MoleMan",
      role: "Rust Server Admin",
    },
  ];

  return (
    <section id="MeetTheTeam" className="bg-[#4449] rounded-xl w-max">
      <h2 className="text-center">Meet The Team</h2>
      <div className="grid grid-cols-2 place-items-center w-max sm:grid-cols-3 gap-2 meet-the-team">
        {team.map((member) => (
          <div className="grid grid-cols-1 place-items-center member">
            <Image
              src={member.img}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="member-info">
              <p className="name">{member.name}</p>
              <p className="role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
