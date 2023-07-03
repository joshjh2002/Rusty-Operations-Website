"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const navbarItemActive =
    "py-4 px-2 border-b-4 border-green-500 font-semibold text-green-500";
  const navbarItemInactive =
    "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300";

  const navbarItemActiveMobile =
    "block text-sm px-2 py-4 text-white bg-green-500 font-semibold";
  const navbarItemInactiveMobile =
    "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300";

  const mobile_menu = React.useRef(null);

  const toggleMenu = () => {
    mobile_menu.current.classList.toggle("hidden");
  };

  const pathname = usePathname();

  return (
    <section id="navbar" className="sticky top-0 z-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="/" className="flex items-center py-4 px-2">
                  <Image
                    src="/img/rust-logo.jpg"
                    width={32}
                    height={32}
                    alt="Logo"
                    className="h-8 w-8 mr-2 rounded-full"
                  />
                  <span className="font-semibold text-gray-500 text-lg">
                    Rusty Operations
                  </span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a
                  className={
                    pathname == "/" ? navbarItemActive : navbarItemInactive
                  }
                  href="/"
                >
                  Home
                </a>
                <a
                  className={
                    pathname == "/servers"
                      ? navbarItemActive
                      : navbarItemInactive
                  }
                  href="/servers"
                >
                  Servers
                </a>
                <a
                  className={
                    pathname == "/news" ? navbarItemActive : navbarItemInactive
                  }
                  href="/news"
                >
                  News
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden mobile-menu" ref={mobile_menu}>
          <ul className="">
            <li>
              <a
                className={
                  pathname == "/"
                    ? navbarItemActiveMobile
                    : navbarItemInactiveMobile
                }
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={
                  pathname == "/servers"
                    ? navbarItemActiveMobile
                    : navbarItemInactiveMobile
                }
                href="/servers"
              >
                Servers
              </a>
            </li>
            <li>
              <a
                className={
                  pathname == "/news"
                    ? navbarItemActiveMobile
                    : navbarItemInactiveMobile
                }
                href="/news"
              >
                News
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
