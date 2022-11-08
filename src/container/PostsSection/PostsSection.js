import { List } from 'antd';
import React from 'react';
import PostsData from './PostsData'
import { useParams } from 'react-router-dom';
import "./PostsSection.css"
import Post from "../../component/Post/Post"

const PostsSection = () => {
  const { slug } = useParams();

  if (slug) {
    const post = PostsData.find((post) => post.slug === slug);
    return <Post item={post} isFull="true" />
  }

  return (
    <List
      itemLayout="horizontal"
      size="large"
      pagination={{
        onChange: (page) => {
          setTimeout( () => window.scrollTo({
              top:0,
              behavior: 'smooth'
          }),200);
        },
        pageSize: 3,
      }}
      dataSource={PostsData}

      renderItem={(item) => (
        <Post item={item} />
      )}
    />
  );
}
export default PostsSection;