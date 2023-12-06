import Post from "../Components/Post"

export default function Posts(){
    return (
        <div className = "posts">
            <h2>Posts</h2>
            <ul>
                <li><Post /></li>
                <li><Post /></li>
                <li><Post /></li>
            </ul>
        </div>
       )
}

Posts;