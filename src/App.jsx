import React from "react";
import "./index.css";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";


function App() {
  return (
  <main>
  <NavBar/>
  <UserProfile/>
  <Contacts/>
  <Posts/>
  </main>
  );
}

export default App;