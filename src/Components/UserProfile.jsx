import profile from "../images/profile.png"

const UserProfile = () => {
    return (
        <section className="user-profile">
            <img src={profile} alt="default profile photo" />
            <div>
                <h1>Iris Beckham</h1>
                <h2>React Creator</h2>
                Lorem ipsem
            </div>
        </section>
    )
}

export default UserProfile