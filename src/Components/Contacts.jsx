import ContactUserCard from "./ContactUserCard";

function Contacts() {
    return (
        <div className="green-border contacts aside">
            <p style={{textAlign:"center"}}>Contacts</p>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
        </div>
    )
}

export default Contacts; 