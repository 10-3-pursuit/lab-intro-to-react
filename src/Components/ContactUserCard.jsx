import pic from "../images/profile.png"
import "./ContactUserCard.css";

const ContactUserCard = ({ addBorder=true }) => {
  return (
    <div className="contact-card" style={addBorder ? {"border": "1px solid black"} : null}>
        <img src={pic} alt="profile icon" />
        <div className="details">
            <h3>Jordan Walker</h3>
            <h4>React Creator</h4>
            <p>Lorem ipsum</p>
        </div>
    </div>
  )
}

export default ContactUserCard;