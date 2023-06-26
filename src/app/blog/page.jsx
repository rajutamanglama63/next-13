import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          className={styles.container}
          href={`/blog/${item.id}`}
          key={item.id}
        >
          <div className={styles.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/908713/pexels-photo-908713.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
