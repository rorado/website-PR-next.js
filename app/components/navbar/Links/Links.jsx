"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import React from "react";
import { blue } from "@mui/material/colors";
const Links = ({ Hide, updeteclass }) => {
  const router = usePathname();
  const links = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Contact us",
      path: "/contact",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className="container_servise" key={link.title}>
          <motion.div className="service" whileTap={{ scale: 0.8 }}>
            <Link
              className={`serviceLink ${
                router.includes(link.path) ? "active" : ""
              }`}
              href={link.path}
              onClick={() => {
                Hide(false);
                updeteclass("");
              }}
            >
              {link.title}
            </Link>
            <br />
          </motion.div>
        </div>
      ))}
    </>
  );
};
export default Links;
