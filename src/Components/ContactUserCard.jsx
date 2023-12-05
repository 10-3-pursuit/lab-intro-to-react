import "./ContactUserCard.css"
import profilePic from '../images/profile.png'

function ContactUserCard() {
    return(
        <div className = "ContactUserCard">
          <img src={profilePic} alt=" picture of profile" />
          <div className="ContactInfo">
            <h2>Jordan Walke</h2>
            <h3>React Creator</h3>
            <p>Lorem Ipsem</p>
          </div>
        </div>
    )
}

export default ContactUserCard;