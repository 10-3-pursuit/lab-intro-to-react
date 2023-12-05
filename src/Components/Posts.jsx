import Post from "./Post";

function Posts() {
    return (
        <div className="blue-border posts">
            <p>Posts</p>
            {/* <ul> */}
                <Post/>
                <Post/>
                <Post/>
            {/* </ul> */}
        </div>
    )
}

export default Posts; 