import Profile from '../images/profile.png'

const ContactUserCard = () => {
  return (
    <div className="userCard">
      <img className='image' src={Profile} alt="" />
      <h3 className='name'>Jordan Walke</h3>
      <h4 className='job'>React Creator</h4>
      <p className='description'>Lorem ipsum.</p>
    </div>
  )
}

export default ContactUserCard