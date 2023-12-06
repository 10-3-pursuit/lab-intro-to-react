import "../Post.css"

const Post = () => {
    return(
        <div className="post">
        <ul style={{border:"1px solid black"}}>
            <li style={{fontWeight:"bold"}}><h3>Title</h3></li>
            <li style={{fontSize:"10px"}}>Lorem Ipsum</li>
        </ul>
        </div>
    )
}

export default Post