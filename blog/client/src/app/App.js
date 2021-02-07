import { PostForm } from "./components/postForm/PostForm"
import { PostList } from "./components/postList/PostList"


export const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostForm />
      <hr />
      <h1>
        Post
      </h1>
      <PostList />
    </div>
  )
}