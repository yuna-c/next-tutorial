"use client";
import { useState } from "react";
import styles from "./write.module.scss";
import clsx from "clsx";

export default function Write() {
  const [Post, setPost] = useState({ title: "", content: "" });
  console.log(Post);

  const handleChange = (e) => {
    const { name, value } = e.target; //{'title','제목값'}
    setPost({ ...Post, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/requestPost", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(Post),
    });

    if (response.ok) {
      alert("글 저장에 성공했습니다.");
    } else {
      alert("글 저장에 실패했습니다.");
    }
  };

  return (
    <section className={clsx(styles.write)}>
      <h1>Write Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={Post.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          cols="30"
          rows="3"
          placeholder="content"
          value={Post.content}
          onChange={handleChange}
        ></textarea>

        <button>Send Post</button>
      </form>
    </section>
  );
}