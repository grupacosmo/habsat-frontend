import React, {useState, useEffect} from 'react';
import PostsData from "../../data/PostsData"
import axios from "axios"

export const PostsContext = React.createContext({
    posts: [],
    handleWhatever: () => {}
});

const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState(PostsData);

    useEffect(() => {
        axios
          .get('/posts')
          .then(({ data }) => setPosts(data.posts))
          .catch((err) => console.log(err));
    }, []);

    const handleWhatever = (props) => {
        console.log(props);
    }

    return (
        <PostsContext.Provider 
            value={{
              posts,
              handleWhatever
            }}
          >
            {children}
        </PostsContext.Provider>
    )
}

export default PostsProvider