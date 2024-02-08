import Hiro from "/public/images/image_home/undraw_join_re_w1lh.svg";
import Image from "next/image";
import styles from "./page.module.css";
import Home_page from "./home/page.jsx";
import { Asap } from "next/font/google";
const Signika = Asap({
  weight: "500",
  subsets: ["latin-ext"],
  variable: "--font-Signika",
});
const Signika_bold = Asap({
  weight: "400",
  subsets: ["latin-ext"],
  variable: "--font-Signika",
});

const Blog = () => {
  return (
    <>
      <Home_page />
    </>
  );
};
export default Blog;
