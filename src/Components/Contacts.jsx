import profilePic from "./images/profile.png"

function Contacts() {
    return (
    <div>
        <p>Contacts</p>
        <ul>
          <img src={profilePic} alt="" />
          <li>ContactUserCard</li>
          <img src={profilePic} alt="" />
          <li>ContactUserCard</li>
          <img src={profilePic} alt="" />
          <li>ContactUserCard</li>
          <img src={profilePic} alt="" />
          <li>ConstactUserCard</li>
        </ul>
        </div>
    );
  }

export default Contacts;