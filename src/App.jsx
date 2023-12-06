import React from "react";
import "./index.css";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";


function App() {
  return (
    <body>
      <header>
      <NavBar/>
      </header>
      <main>
      <div className="user-profile-div">
      <UserProfile/>
      <br></br>
      <Posts/>
      </div>
      <Contacts/>
      </main>
    </body>
  );
}

export default App;