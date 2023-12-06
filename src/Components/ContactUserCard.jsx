import profilePic from '/Users/carlitosdutan/Documents/10.3/module-three/labs/lab-intro-to-react/src/images/profile.png'


function ContactUserCard() {
    return (
        <div className="contactcard">
            <img src= {profilePic} alt="Profile Pic"/>
            <div className='contactcard-info'>
                <h2>Jordan Walke</h2>
                <h3>React Creator</h3>
                <p><i>Montauk, New York</i></p>
            </div>
        </div>
    )
}

export default ContactUserCard;