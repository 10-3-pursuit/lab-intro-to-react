import profilePic from "../profile.png"

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src={profilePic} alt="" />
      <section className="profile-content">
      <h3>Jordan Walke</h3>
      <p>React Creator</p>
      <p>Lorem ipsum</p>
      </section>
    </div>
  )
}

export default UserProfile