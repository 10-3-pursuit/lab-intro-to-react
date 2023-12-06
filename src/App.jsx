import react from 'react'
import "./index.css";
import User from "../src/Components/UserProfile.jsx"
import ContactUser from "../src/Components/ContactUserCard.jsx"
import Posts from "../src/Components/Posts.jsx"
import NavBar from "../src/Components/NavBar.jsx"
import Contacts from "../src/Components/Contacts.jsx"

function App() {
  return (
   <div className="App">
    <NavBar />
    <User /> 
    <Posts />
    <Contacts />
  </div>
  );
}
export default App;
