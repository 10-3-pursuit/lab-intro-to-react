import React from "react";
import "./index.css";
import Navbar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import PostContainer from "./Components/Post";

function App() {
  return <div className="App">
    <Navbar />
    <div className="middle-body">
      <div className="User-info">
      <UserProfile />
      <PostContainer />

      </div>
      <Contacts />

    </div>

  </div>;
}

export default App;
