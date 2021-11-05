import React, { useContext, useState } from "react";
import { PostContext } from "../context/post.context";

const AddPost = () => {
  const [post, setPost] = useState();

  const { savePost } = useContext(PostContext);

  const handlePostChange = (event) => {
    setPost({
      ...post,
      [event.target.id]: event.target.value,
    });
  };

  const addNewPost = (event) => {
    event.preventDefault();
    savePost(post);
  };

  return (
    <form onSubmit={addNewPost}>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handlePostChange}
      />
      <input
        type="text"
        id="content"
        placeholder="Content"
        onChange={handlePostChange}
      />
      <button>Add new post</button>
    </form>
  );
};

export default AddPost;
