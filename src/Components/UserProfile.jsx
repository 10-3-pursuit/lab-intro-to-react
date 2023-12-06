import userProfilePic from "../images/profile.png";
const UserProfile = () => {
  return (
    <div
      style={{ border: "2px solid black", marginLeft: "30px" }}
      className="user-profile"
    >
      <img
        style={{ border: "1px solid black" }}
        className="profile-pic"
        src={userProfilePic}
        alt="user's profile pic"
      ></img>
      <strong> Jordan Walke</strong>
      <h3> React Creator</h3>
      <p> Lorem Ipsum</p>
    </div>
  );
};

export default UserProfile;
