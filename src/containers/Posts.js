import React, { useContext, useState } from "react";
import Post from "../components/Post";
import { PostContext } from "../context/post.context";

const Posts = () => {
  const { posts } = useContext(PostContext);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
