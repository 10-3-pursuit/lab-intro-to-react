import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import ContactUserCard from "./Components/ContactUserCard";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <UserProfile/>
      <Contacts/>
      <Posts/>
      </div>
    
  )
}

export default App;
