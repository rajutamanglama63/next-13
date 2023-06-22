"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "About",
      url: "/about",
    },
    {
      id: 2,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 4,
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 5,
      title: "Portfolio",
      url: "/portfolio",
    },
  ];
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        softdev
      </Link>

      <div className={styles.link}>
        <DarkModeToggle />
        {links?.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        <button
          className={styles.btn_logout}
          onClick={() => console.log("clicked!")}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
