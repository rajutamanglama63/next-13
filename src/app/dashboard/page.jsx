"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import Image from "next/image";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [softReload, setSoftReload] = useState(false);

  const session = useSession();
  console.log("session: ", session);

  const router = useRouter();
  // const reloader = useRouter();

  const refreshData = () => {
    setSoftReload((prev) => (prev === false ? true : false));
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `api/posts?username=${session?.data?.user.name}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json();
      console.log("data from dashboard: ", data);

      setData(data);
      setIsLoading(false);
    };

    getData();
  }, [softReload]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      refreshData();
      e.target.reset();
    } catch (error) {
      console.log("err: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      refreshData();
    } catch (error) {
      console.log("delete err: ", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading
          ? "loading..."
          : data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imageContainer}>
                  <Image
                    src={post.img}
                    alt="post image"
                    width={200}
                    height={100}
                  />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
      </div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add new post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea
          placeholder="Content"
          className={styles.textArea}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
