import ContactUserCard from "./ContactUserCard"
import "./Contacts.css"
function Contacts(){
    return (
        <aside className="Contact-Container">
        <h2>Contact</h2>
        <ul className="Contact-List">
            <ContactUserCard />
        </ul>
        </aside>
    )
}

export default Contacts