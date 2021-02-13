import { useState, useEffect } from "react"
import axios from "axios"

import { CommentForm } from "../commentForm/CommentForm"
import { CommentList } from "../commentList/CommentList"


export const PostList = () => {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:4000/posts')

    setPosts(data)
  }


  useEffect(() => {
    fetchPosts()
  }, [])

  const renderedPostList = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card-body"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <h3>
          {post.title}
        </h3>
        <CommentList postId={post.id} />
        <CommentForm postId={post.id} />
      </div>
    )
  })

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPostList}
    </div>
  )
}