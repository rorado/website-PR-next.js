"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { motion } from "framer-motion";

import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SkeletonChildrenDemo() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContainer}>
      {products.map((product, i) => (
        <Link href={`products/${product.id}`} key={product.id}>
          <motion.div
            className={styles.compentPro}
            initial={{ opacity: 0, x: -400, y: i % 2 ? 600 : -600 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className={styles.imageContainer}>
              <Image src={product.thumbnail} alt="" width={300} height={300} />
            </div>
            <div className={styles.infContainer}>
              <h2 className={styles.title}>{product.title}</h2>
              <p className={styles.inf}>{product.description}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
