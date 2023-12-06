import "./index.css"
import NavBar from './Components/NavBar.jsx'
import Posts from './Components/Posts.jsx'
import UserProfile from './Components/UserProfile.jsx'
import Contacts from './Components/Contacts.jsx'

function App() {
  return (
  <div className="main">
    <header className="nav"><NavBar/></header>
    <main><UserProfile/></main>
    <aside><Contacts/></aside>
    <section><Posts/></section>
  </div>
  )
}

export default App;
