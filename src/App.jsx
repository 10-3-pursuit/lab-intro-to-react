import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";

function App() {
  return(
    <div className="App">
      <NavBar/>
      <section className="boxes">
        <div>
      <UserProfile/>
        <Posts/>
          </div>
          <div>
      <Contacts/>
            </div>        
      </section>
    </div>
  )
}

export default App;
