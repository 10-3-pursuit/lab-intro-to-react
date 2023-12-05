import "./index.css";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="profile-posts">
          <UserProfile />
          <Posts />
        </div>
        <Contacts />
      </div>
    </>
  )
}

export default App;
