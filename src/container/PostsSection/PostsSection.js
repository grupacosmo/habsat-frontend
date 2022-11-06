import { EditOutlined } from '@ant-design/icons';
import { List } from 'antd';
import React from 'react';
import PostsData from './PostsData'

import "./PostSection.css"
import Logo2 from "../../assets/images/Logo2.png"


const PostsSection = () => (
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
    footer={
      <div>

      </div>
    }
    renderItem={(item) => (
      <div  className="my-list-item">  
        <List.Item
            className='myListElement'
            key={item.title}
        >
            <List.Item.Meta
            title={<h2 className="post-header">{item.title}</h2>}
            description={`Dodano: ${item.publishedAt}`}
            />

        <img src={Logo2} style={{width:"30px", marginRight:"10px"}}/>
        </List.Item>
        <List.Item  className='myListElement' >
            
            <article className="post-content">
            <img
                width={`100%`}
                alt="logo"
                src={`https://picsum.photos/id/${item.id*100}/1800/500`}
            />
            <p style={{textAlign: "justify"}}>{item.content}</p> 
            <div className="post-author"><EditOutlined />  {item.emailOfAuthor}</div>
            </article>
        </List.Item>
      </div>
      
    )}
  />
);
export default PostsSection;