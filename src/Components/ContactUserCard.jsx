import profile from "../images/profile.png"
const ContactUserCard = () => {
    return (
        <li className='user-profile'>
            <img src={profile} alt="" />
            <div>
                <h2>Iris Beckham</h2>
                <h3>React Creator</h3>
                <p>Lorem ipsem</p>
            </div>

        </li>
    )
}

export default ContactUserCard