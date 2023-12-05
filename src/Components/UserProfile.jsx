import profilePic from '../images/profile.png'

import "./UserProfile.css"
function UserProfile(){
    return (
        <div className="UserProfile">
            <img src={profilePic} alt=" picture of profile" />
            <div className='userInfo'>
                <h1>
                    Jordan Walke
                </h1>
                <h2>
                    React Creator
                </h2>
                <p>
                    Lorem Ipsem
                </p>
            </div>
        </div>
    );
}

export default UserProfile;