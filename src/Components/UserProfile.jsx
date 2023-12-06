import profilePic from '../images/profile.png'
import "../Components/UserProfile.css"


function UserProfile() {
    return (
    <section className='user-profile'>
        <img src={profilePic} alt="profile-pic"/>
        <div className='profile-description'>
            <h1>Jordan Walke</h1>
            <h2>React Coordinator</h2>
            <p>Bla Bla Bla</p>
        </div>
    </section>
    );
}
  
  export default UserProfile;