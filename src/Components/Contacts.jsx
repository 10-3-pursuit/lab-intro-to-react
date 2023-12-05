import ContactUserCard from "./ContactUserCard";
import "./Contacts.css"

const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
    </div>
  )
}

export default Contacts;