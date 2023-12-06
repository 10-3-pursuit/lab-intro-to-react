import thumbnail from "../images/profile.png"

export default function User(){
    return (
    <>
        <img src={thumbnail} alt="thumbnail"/>
        <ul>
            <li><span className="name">Jordan Walke</span></li>
            <li><span className="role">React Creator</span></li>
            <li><span classname="desc">Lorem ipsum</span></li>
        </ul>
    </>
    );  
}

User;