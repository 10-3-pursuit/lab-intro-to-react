import ContactUserCard from "./ContactUserCard";

import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div>
      <section className="profile">
        <ContactUserCard addBorder={false}/>
      </section>
    </div>
  )
}

export default UserProfile;