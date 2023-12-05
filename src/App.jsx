import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile"
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";
import "./App.css"


function App() {
  return(
    <div className="App">
      <header>
          <NavBar/>
      </header>
      <div className="body">
      <div className="AllPosts">
            <UserProfile/>
            <Posts/>
            </div>
            <Contacts/>
      </div>
    </div>
  )
}

export default App;
