import profile from '../images/profile.png';

function ContactUserCard({ name, email, phone }) {
  return (
    <>
      <div className="user-card" style={{ backgroundColor: 'white', border: '3px solid black' }}>
        <img src={profile} alt="No" />
        <div>
          <h3>{name}</h3>
          <h4>React Creator</h4>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </>
  );
}

export default ContactUserCard;