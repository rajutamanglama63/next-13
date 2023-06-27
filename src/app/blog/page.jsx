import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    const data = res.json();
    // console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("err: ", error);
    return [];
  }

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
};

const Blog = async () => {
  const data = await getData();
  console.log("data: ", data);
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          className={styles.container}
          href={`/blog/${item._id}`}
          key={item._id}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt="picture"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
