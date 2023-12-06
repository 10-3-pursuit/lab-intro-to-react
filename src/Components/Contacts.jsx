import ContactUserCard from "./ContactUserCard"
import "../Contacts.css";



const Contacts = () => {
    return(
        <div className="contacts">
            <h2>Contacts</h2>
            <ul>
            <li><ContactUserCard/></li>
            
            <li><ContactUserCard/></li>
            
            <li><ContactUserCard/></li>
            
            <li><ContactUserCard/></li>
            </ul>
        </div>
    )
}

export default Contacts