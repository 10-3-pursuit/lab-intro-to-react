import Post from "./Post";

import "./Posts.css"
function Posts() {
    return(
        <div className = "Posts">
          <h1>Posts</h1>
          <Post/>
          <Post/>
          <Post/>
          
        </div>
    )
}

export default Posts;