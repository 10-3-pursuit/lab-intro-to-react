import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Profile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Post from "./post";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Contacts />
      <Post />
      <Post />
    </div>
  );
}

export default App;
