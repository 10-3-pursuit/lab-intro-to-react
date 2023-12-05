import Post from "./Post";

import "./Posts.css"

const Posts = () => {
  return (
    <div>
        <section className="posts">
            <h2>Posts</h2>
            <Post />
            <Post />
            <Post />
        </section>
    </div>
  )
}

export default Posts;