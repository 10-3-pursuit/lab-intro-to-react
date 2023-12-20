import profile from "../images/profile.png"

const UserProfile = () => {
    return(
        <section className="user-profile">
            <img src={profile} alt="profile pic" />
            <div>
                <h1>Jordan Walke</h1>
                <h2>React Creator</h2>
                Lorem Ipsum
            </div>
        </section>
    )
}

export default UserProfile