import React from "react"
import "./index.css"
import "./App.css"
import Contacts from "./Components/Contacts"
import NavBar from "./Components/NavBar.jsx"
import Posts from "./Components/Posts.jsx"
import UserProfile from "./Components/UserProfile.jsx"

function App() {
  return(
    <div className="App">
      <NavBar />
        <main>
        <UserProfile />
        <Posts />
        </main>
        <Contacts />
    </div>
  )
}

export default App;
