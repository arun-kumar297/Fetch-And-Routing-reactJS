// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="item-image" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h2 className="item-title">{title}</h2>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem