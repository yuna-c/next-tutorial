"use client";
// import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function PostDetail({ params }) {
  // const { num } = useParams();

  //해당 다이나믹 라우팅 페이지 컴포넌트가 호출된 조건이 Link컴포넌트에 의해서 호출된 경우라면
  //useParams훅을 쓰지 않더라도 자동으로 props통해서 params객체가 받아짐
  //useParams를 쓰는 경우는 Link가 특정 핸들러함수를 통해서 동적으로 호출될때 직접 params값을 활용할때
  // [받아오는 수단] dynamic router
  const { num } = params;

  const [Post, setPost] = useState(null); //객체니까

  useEffect(() => {
    const fetchPostById = async (url) => {
      const data = await fetch(url);
      const result = await data.json();
      console.log(result);
      setPost(result);
    };

    fetchPostById(`https://jsonplaceholder.typicode.com/posts/${num}`);
  }, [num]);

  return (
    <div>
      <h2>{Post?.title}</h2>
      <p>{Post?.body}</p>
    </div>
  );
}
