import profile from "../images/profile.png"

const UserProfile = () => {
    return(
        <section className="user-profile">
            <img src={profile} alt="default profile photo"/>
            <div>
                <h1>Jennifer Edward</h1>
                <h2> Intro to </h2>
            </div>

        </section>
    )
}
export default UserProfile