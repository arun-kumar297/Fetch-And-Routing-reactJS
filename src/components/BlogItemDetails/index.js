import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogItemsData()
  }

  getBlogItemsData = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    // console.log(data)
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      author: data.author,
      avatarUrl: data.avatar_url,
    }
    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
