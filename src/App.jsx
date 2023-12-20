import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.jsx";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts.jsx";
import Contacts from "./Components/Contacts.jsx"


function App() {
  return (
    <div>

      <header>
        <NavBar />
      </header>

      <main>
        <div>
          <UserProfile />
          <Posts />
        </div>

        <div>
          <Contacts />
        </div>
      </main>
          

    </div>
  );
}

export default App;
