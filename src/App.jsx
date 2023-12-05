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
      {/* <ul className="main-section"> */}
        <UserProfile />
        <Posts />
      {/* </ul>  */}
      <Contacts/>
    </div>
  );
}

export default App;
