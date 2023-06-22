import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See more" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="container image"
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See more" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="container image"
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See more" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="container image"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
