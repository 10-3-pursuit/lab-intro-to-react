import profilePic from "../images/profile.png"
const UserProfile = () => {
  return (
    <div>
        <img src= {profilePic} alt="profile pic" />
        <h2>Jordan Walke</h2>
        <h3>React Creator</h3>
        <p>lorem ipsum</p>
    </div>
  )
}

export default UserProfile