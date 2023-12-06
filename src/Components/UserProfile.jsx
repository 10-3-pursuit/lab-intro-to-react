import image from '../images/profile.png';

function UserProfile() {
  return (
    <div className="user-pro">
      <img src={image} alt="No" />
      <ul>
        <li>Jordan Walks</li>
        <li>React Creator</li>
        <li>Lorem Ipsum</li>
      </ul>
    </div>
  );
}

export default UserProfile;