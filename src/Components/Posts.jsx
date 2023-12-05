import Post from "./Post";


function Posts() {
    return (
        <div className="blue-border">
            <p>Posts</p>
            <ul>
                <Post/>
                <Post/>
                <Post/>
            </ul>
        </div>
    )
}

export default Posts; 