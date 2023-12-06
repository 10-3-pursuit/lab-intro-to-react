import "./Post.css"
import PostList from "./Posts"

function PostContainer(){
    return (
        <div className="Post-Container">
            <h2 className="post-header">Posts</h2>
            <ul className="post-list">
                <PostList />
            </ul>
        </div>
    )
}

export default PostContainer