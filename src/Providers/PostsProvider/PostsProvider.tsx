import React, { useState, useEffect, FC, ReactNode } from "react";
import PostsData from "../../data/PostsData";
import axios from "axios";
import { IPost } from "typings/flights";

interface IPostsContext {
  posts: IPost[],
  handleWhatever: (props:any) => void
}

export const PostsContext = React.createContext<IPostsContext>({
  posts: [],
  handleWhatever: () => {},
});

const PostsProvider:FC<{children: ReactNode}> = ({ children }) => {
  const [posts, setPosts] = useState(PostsData);

  // Turned off until Posts Service works

  // useEffect(() => {
  //   axios
  //     .get("/api/posts")
  //     .then(({ data }) => setPosts(data.posts))
  //     .catch((err) => console.log(err));
  // }, []);

  const handleWhatever = (props:any) => {
    console.log(props);
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        handleWhatever,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
