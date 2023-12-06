import ContactUserCard from "./ContactUserCard";

function Contacts() {
    return (
        <div className="contacts">
            <h2 className="contacts-heading">Contacts</h2>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
        </div>
    )
}

export default Contacts;