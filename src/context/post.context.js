import React, { createContext, useReducer, useState } from "react";
import { reducer } from "./reducer";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(reducer, [
    {
      id: 111,
      title: "post 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 222,
      title: "post 2",
      body:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
  ]);

  //   const savePost = (post) => {
  //     const newPost = {
  //       id: Math.random(),
  //       title: post.title,
  //       content: post.content,
  //     };
  //     setPosts([...posts, newPost]);
  //   };
  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
