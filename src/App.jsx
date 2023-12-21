import React from 'react';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import Posts from './components/Posts';
import Contacts from './components/Contacts';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container">
        <div className="left-content">
          <UserProfile />
          <Posts />
        </div>
        <div className="right-content">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default App;

