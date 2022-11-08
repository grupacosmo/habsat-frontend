import "../../container/PostsSection/PostsSection.css"
import {  List } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import cosmo from "../../assets/images/svg/Logo2.svg";


const cutContent = (text) => {
    return text.substr(0,230)+"...";
  }

const scrollTop = () => {
    window.scrollTo({
        top:0,
        behavior:"auto"
    })
}

const Post = ({item, isFull}) => (
    <div  className="my-list-item">  
        <List.Item
            className='post -header'
            key={item.title}
        >
            <List.Item.Meta
            title={
              <span className="post-title">
                <Link to={`/posts/${item.slug}`} onClick={scrollTop}>
                {item.title}
                </Link>
              </span>
            }
            description={`Dodano: ${item.publishedAt}`}
            />

        <img src={cosmo} style={{width:"30px", marginRight:"10px"}} alt="logo"/>
        </List.Item>
        <List.Item >
            
            <article className="post-content">
                {item.thumbnailId > -1 ?
                    <img
                        width={`100%`}
                        alt="Thumbnail"
                        src={`https://picsum.photos/id/${item.id*100}/1800/500`}
                    />
                    : null
                }
                <p style={{textAlign: "justify", marginTop:"10px"}}>
                    {
                        isFull ? item.content : cutContent(item.content)
                    }
                </p> 
                <div className="post-author"><EditOutlined />  {item.emailOfAuthor}</div>
            </article>
        </List.Item>
        
      </div>
)

export default Post;