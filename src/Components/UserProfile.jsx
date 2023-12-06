import profilePic from '../images/profile.png'


function UserProfile() {
    return (
    <section className='user-profile'>
    <img src={profilePic} alt="profile-pic"/>
    <h1>Jordan Walke</h1>
    <h2>React Coordinator</h2>
    <p>Bla Bla Bla</p>
    </section>
    );
}
  
  export default UserProfile;