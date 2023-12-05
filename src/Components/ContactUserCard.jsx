import profilePic from "../profile.png"
const ContactUserCard = () => {
  return (
    <div className="card">
      <img  className="contact-image" src={profilePic} alt="" />
      <section className="card-content">
        <h3>Jordan Walke</h3>
        <p>React Creator</p>
        <p>Lorem ipsum</p>
      </section>
    </div>
  )
}

export default ContactUserCard