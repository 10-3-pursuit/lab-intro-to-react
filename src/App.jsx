import React from "react";
import "./index.css";

import NavBar from "./Components/NavBar.jsx"
import UserProfile from "./Components/UserProfile.jsx"
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";


function App() {
  return <p>Hello, world!</p>;
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
      <Contacts />
    </main>
  </div>
);
}

export default App;
