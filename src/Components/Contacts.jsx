import ContactUserCard from "./ContactUserCard";

function ContactList() {
    return (
        <div className="list">
        <ul>
            <h2>Contacts</h2>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </ul>
        </div>
    );
}

export default ContactList

