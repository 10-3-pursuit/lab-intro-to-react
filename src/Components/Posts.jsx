import React from 'react';
import Post from './Post';

const Posts = () => {
  
  const userPosts = [
    { id: 1, title: 'Monday', body: 'Noo i hate mondays!' },
    { id: 2, title: 'Saturday', body: 'Cant wait for tonight' },
    { id: 3, title: 'Last Week', body: 'This week was awesome' },
  ];

  return (
    <div className="user-posts">
      <h2>Posts</h2>
      {userPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
