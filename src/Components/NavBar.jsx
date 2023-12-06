import "../NavBar.css"


const NavBar = () => {
    return(
        <div style={{background:"lightblue",cursor:"pointer"}}>
            <ul>
                <li><button style={{fontSize:"10px"}}>What is Pursuit?</button></li>
                <li><button style={{fontSize:"10px"}}>Create an account</button></li>
                <li><button style={{fontSize:"10px"}}>Sign in</button></li>
                
            </ul>
        </div>
    )
}

export default NavBar;