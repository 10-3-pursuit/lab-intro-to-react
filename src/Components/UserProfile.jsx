import "./UserProfile.css"
import thumb from "../images/profile.png"
const userThumb = "../"
function UserProfile(){
    return (
        <div className="User-Profile">
            <img src={thumb} alt="default user thumb" />
            <div className="info">
            <p className="name">Jordan Walke</p>
            <p className="role">React Creator</p>
            <p className="text">Lorem Ipsum</p>
            </div>

        </div>
    )
}

export default UserProfile