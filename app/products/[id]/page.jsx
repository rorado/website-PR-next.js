import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    console.log("error");
  }

  return res.json();
}
//
export default async function Branches({ params }) {
  const product = await getData(params.id);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.subAddress}>{product.description}</p>
        </div>

        <div className={styles.imageContainer}>
          <h3 className={styles.writer}>{product.discountPercentage}%</h3>
          <Image
            className={styles.image}
            src={product.thumbnail}
            alt={product.title}
            width={600}
            height={350}
          />
        </div>

        <div className={styles.miniImages}>
          <Suspense fallback={<p>loading</p>}>
            {product.images.map((image) => (
              <Image
                key={product.id}
                className={styles.miniImage}
                src={image}
                width={200}
                height={200}
                alt={product.title}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </header>
  );
}
