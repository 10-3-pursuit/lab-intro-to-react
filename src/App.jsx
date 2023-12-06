import React from "react";
import "./index.css";
// import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Post from "./Components/Post";


function App() {
  return (<>
  <NavBar/>
  <UserProfile/>
  <Contacts/>
  <Post/>
  </>);
  
}

export default App;
