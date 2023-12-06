import Post from "./Post"
import "../Components/Posts.css"

const Posts = () => {
  return (
    <section className="posts">
    <h1>Posts</h1>
            <Post/>
            <Post/>
            <Post/>
    </section>
  )
}

export default Posts