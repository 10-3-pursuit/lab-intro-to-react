//OTHER OPTION BELOW
// import ContactUserCard from "./ContactUserCard";

// function UserProfile() {
//     return(
//         <div>
//             <ContactUserCard/>
//         </div>
//     )
// }

// export default UserProfile;

import profilePic from '../images/profile.png';

function UserProfile() {
    return(
        <div className='user-profile-card'>
        <img src={profilePic} alt="" />
        <div>
        <h3>Someone</h3>
        <h4>Their Job</h4>
        <p>Something About Them</p>
        </div>
      </div>
    )
}

export default UserProfile;