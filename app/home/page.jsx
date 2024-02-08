"use client";
import { useEffect, useRef } from "react";
import Hiro from "/public/images/image_home/undraw_join_re_w1lh.svg";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Popular_products from "../components/api/product_home/product_home";
import { Asap } from "next/font/google";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { motion } from "framer-motion";

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

export default function Home_page() {
  const scrollContainerRef = useRef(null);

  const scrollForward = () => {
    scrollContainerRef.current.scrollLeft +=
      0.5 * scrollContainerRef.current.clientWidth;
  };

  const scrollBackward = () => {
    scrollContainerRef.current.scrollLeft -=
      0.5 * scrollContainerRef.current.clientWidth;
  };

  useEffect(() => {
    scrollContainerRef.current.scrollLeft =
      0.2 * scrollContainerRef.current.clientWidth;
  }, []);

  return (
    <div className={styles.home}>
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 70,
        }}
      >
        <div className={styles.imageHome}>
          <div className={styles.context_image_home}>
            <h1 className={styles.title}>
              Welcome to Diba swebsite for selling products
            </h1>
            <h3 className={styles.identification}>
              Welcome to Diba , where excellence and diversity converge in the
              world of online shopping, marrying elegance with innovation to
              enhance your shopping experience with every purchase.
            </h3>
          </div>
          <div className={styles.buttons}>
            <button>
              <span className={styles.cover}></span>SIGN UP
            </button>
            <button>
              <span className={styles.cover}></span>LOG IN
            </button>
          </div>
        </div>
      </motion.div>

      <div className={styles.Popular_Products}>
        <div className={styles.title}>
          <h1>Popular Products</h1>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            molestiae alias assumenda sed similique possimus ipsa deleniti optio
            cupiditate sint.
          </h4>
        </div>

        <div className={styles.products_container} ref={scrollContainerRef}>
          <Popular_products />
        </div>

        <div className={styles.Control_products}>
          <motion.div whileTap={{ scale: 0.8 }} className={styles.next}>
            <RiArrowLeftSLine
              className={styles.prev}
              onClick={scrollBackward}
            />
          </motion.div>

          <motion.div whileTap={{ scale: 0.8 }} className={styles.prev}>
            <RiArrowRightSLine
              className={styles.next}
              onClick={scrollForward}
            />
          </motion.div>
        </div>

        <div style={{ marginTop: " -30px " }}>
          <Link href="/products">
            <h4 className={styles.chow_more}>Chow more</h4>
          </Link>
        </div>
      </div>

      <div className={styles.dexp}>
        <Image className={styles.photo} src={Hiro} width={290} alt="fotos" />
        <div>
          <h1 className={`${styles.title} ${Signika_bold.className}`}>Lorem</h1>
          <p className={`${styles.text} ${Signika.className}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error enim
            non recusandae adipisci et rem dolor neque officiis quod dolores.
            Dolor consequuntur culpa minus accusantium dolore, reiciendis
            necessitatibus asperiores provident facere sequi saepe animi? Quae
            accusamus eveniet tempora fugit, temporibus explicabo veniam vitae
            eum alias modi quod dolor. Iusto temporibus suscipit incidunt? Ea
            necessitatibus voluptas repellat fuga sint accusamus rerum.
          </p>
        </div>
      </div>
    </div>
  );
}
