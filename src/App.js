import "./App.css";
import { Fragment } from "react";
import AddPost from "./components/AddPost";
import Posts from "./containers/Posts";
import PostProvider from "./context/post.context";

function App() {
  return (
    <PostProvider>
      <AddPost />
      <Posts />
    </PostProvider>
  );
}

export default App;
