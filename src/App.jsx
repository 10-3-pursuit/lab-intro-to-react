// App.jsx
import React from 'react';
import Navbar from './Components/NavBar.jsx';
import UserProfile from './Components/UserProfile.jsx';
import Posts from './Components/Posts.jsx';
import ContactList from './Components/Contacts.jsx';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <section>
      <UserProfile/>
      <Posts/>
      </section>
      <ContactList/>
    </div>
  );
}

export default App;
