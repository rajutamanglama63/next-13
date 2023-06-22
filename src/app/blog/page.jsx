import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link className={styles.container} href="/blog/123">
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
          <h1 className={styles.title}>Tifle</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>

      <Link className={styles.container} href="/blog/123">
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
          <h1 className={styles.title}>Tifle</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>

      <Link className={styles.container} href="/blog/123">
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
          <h1 className={styles.title}>Tifle</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
