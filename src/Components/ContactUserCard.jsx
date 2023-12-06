import profilePic from '../images/profile.png';
import "../index.css";

function ContactUserCard(){
    return(
        <div className='user-card'>
        <img src={profilePic} alt="" />
        <div>
        <h3>Someone</h3>
        <h4>Their Job</h4>
        <p>Something About Them</p>
        </div>
      </div>
    )
}

export default ContactUserCard;