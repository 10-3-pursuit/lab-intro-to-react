import profilePic from '/Users/carlitosdutan/Documents/10.3/module-three/labs/lab-intro-to-react/src/images/profile.png'

function UserProfile() {
    return (
        <div className="userprofile">
            <img src = {profilePic} alt="Profile Pic" />
            <div className="user-info">
                <h2>Jordan Walke</h2>
                <h3>React Creator</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum culpa veniam voluptas doloremque ratione sapiente, enim possimus? Omnis tenetur cumque quos vitae enim quia mollitia sunt modi aliquam nesciunt.</p>
            </div>
        </div>
    )
}

export default UserProfile;