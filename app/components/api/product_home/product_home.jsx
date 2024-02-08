import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/app/loading/loading";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productIds = [11, 5, 8, 15, 9, 25, 17, 29];

    const fetchData = async (id) => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    const fetchAllData = async () => {
      try {
        const dataPromises = productIds.map((id) => fetchData(id));
        const dataResults = await Promise.all(dataPromises);
        setProducts(dataResults);
        console.log(dataResults);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchAllData();
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <Link href={`products/${product.id}`}>
              <motion.div
                className={styles.image}
                whileHover={{
                  y: -15,
                  borderRadius: "10px",
                }}
              >
                <Image
                  className={styles.photo_product}
                  src={product.thumbnail}
                  width={300}
                  height={200}
                  alt="product"
                />
                <span>{product.discountPercentage}</span>
              </motion.div>
              <div className={styles.Product_parameters}>
                <h2>{product.title}</h2>
                <h4>{product.description}</h4>
              </div>
            </Link>
          </div>
        ))}
      </Suspense>
    </>
  );
};

export default PopularProducts;
