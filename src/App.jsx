import React from "react";
import "./index.css";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
    <NavBar />
    <UserProfile />
    <Posts />
    <Contacts/>
    </div>
  );
}

export default App;
