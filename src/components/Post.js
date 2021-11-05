import React from "react";

const Post = ({ post }) => (
  <div className="post">
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </div>
);

export default Post;
