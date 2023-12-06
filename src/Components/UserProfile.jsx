import profilePic from "../images/profile.png"
import "../UserProfile.css"

const UserProfile = () => {
    return(
        <div className="user-p">
        <img src={profilePic} alt="profile-pic"/>
        <ul>
            <li style={{fontWeight:"bold"}}>Jordan Walke</li>
            <li style={{fontWeight:"bold",fontSize:"15px"}}> React Creator</li>
            <li style={{fontSize:"10px"}}>Lorem ipsum</li>
        </ul>
        </div>
    )
}

export default UserProfile