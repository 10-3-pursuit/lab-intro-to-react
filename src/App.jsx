import React from "react";
import "./index.css";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";


function App() {
  return (
  <section>
  <NavBar/>
  <UserProfile/>
  <Contacts/>
  <Posts/>
  </section>);
}

export default App;