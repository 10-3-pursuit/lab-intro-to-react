import Post from "./Post";

function Posts() {
    return (
        <div className="posts">
            <h2>Posts</h2>
            <ul>
            <Post/>
            <Post/>
            <Post/>
            </ul>
        </div>
    )
}
  export default Posts;