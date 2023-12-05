import React from "react";
import "./index.css";
import ContactList from "./Components/Contacts.jsx";
import NavBar from "./Components/NavBar.jsx";
import Posts from "./Components/Posts.jsx";
import UserProfile from "./Components/UserProfile.jsx";

function App() {
  return (
    <>
    <div className="App">
    <NavBar />
    <section>
    <UserProfile />
    <Posts />
    </section>
    <ContactList />
    </div>
    </>
  )
}

export default App;
