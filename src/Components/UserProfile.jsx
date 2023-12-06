import userProfilePic from "../images/profile.png";
const UserProfile = () => {
  return (
    <div style={{ border: "2px solid black" }} className="user-profile">
      <img
        style={{ border: "1px solid black" }}
        className="profile-pic"
        src={userProfilePic}
        alt="user's profile pic"
      ></img>
      <h2>Jordan Walke</h2>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default UserProfile;
