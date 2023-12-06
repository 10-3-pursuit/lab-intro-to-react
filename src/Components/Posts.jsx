import Post from "./Post";

const Posts = () => {
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          marginLeft: "30px",
          paddingBottom: "100px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Posts</h2>
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Posts;
