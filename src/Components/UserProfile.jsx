import picture from "../images/profile.png";
export default function Profile() {
  return (
    <div>
      <img src={picture} alt="Profile Image" />
      <ul>
        <li>
          <span className="name">Jordan Walke</span>
        </li>
        <li>
          <span className="title">React Dev</span>
        </li>
        <li>
          <span classname="description">Lorem Ipsum</span>
        </li>
      </ul>
    </div>
  );
}
Profile;
