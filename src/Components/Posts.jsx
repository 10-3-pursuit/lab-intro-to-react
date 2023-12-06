import Post from './Post.jsx'

const Posts = () => {
  return (
    <div className='posts'>
      <h2>Posts</h2>
      <ul>
        <li><Post/></li>
        <li><Post/></li>
        <li><Post/></li>
      </ul>
    </div>
  )
}


export default Posts