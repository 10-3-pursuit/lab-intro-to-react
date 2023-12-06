import Post from "../Components/Post"

export default function Posts(){
    return (
        <div className = "posts">
            <h2>Posts</h2>
            <ul>{Post}</ul>
            <ul>{Post}</ul>
            <ul>{Post}</ul>
        </div>
       )
}

Posts;