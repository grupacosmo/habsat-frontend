import { List } from 'antd';
import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import "./PostsSection.css"
import Post from "../../component/Post/Post"
import { PostsContext } from '../../Providers/PostsProvider/PostsProvider';
import { IPost } from 'typings/flights';

const PostsSection:FC = () => {
  const { slug } = useParams<{slug?: string}>();
  const { posts } = useContext(PostsContext)

  if (slug) {
    const singlePost = posts.find((post) => post.slug === slug);
    if (singlePost)  
      return <Post item={singlePost} isFull="true" />
  }

  return (
    <List
      itemLayout="horizontal"
      size="large"
      pagination={{
        onChange: () => {
          setTimeout( () => window.scrollTo({
              top:0,
              behavior: 'smooth'
          }),200);
        },
        pageSize: 3,
      }}
      dataSource={posts}

      renderItem={(item) => (
        <Post item={item} />
      )}
    />
  );
}
export default PostsSection;