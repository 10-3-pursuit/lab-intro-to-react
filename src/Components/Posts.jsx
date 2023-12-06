import Post from "./Post";

function Posts() {
    return(
        <div className="entirewall">
            <h2>Posts</h2>
            <div className="wallpost">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>

    )
}

export default Posts;