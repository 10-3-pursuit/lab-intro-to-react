import profilePic from '../images/profile.png'


function UserProfile() {
    return (
    <header className='user-profile'>
        <img src={profilePic} alt="profile-pic"/>
        <div className='profile-description'>
            <h1>Jordan Walke</h1>
            <h2>React Coordinator</h2>
            <p>Bla Bla Bla</p>
        </div>
    </header>
    );
}
  
  export default UserProfile;