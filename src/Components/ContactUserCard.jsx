import stockIm from "../images/profile.png"

function contactUserCard() {
    return (
        <>
        <div className= "userCard" style= {{backgroundColor: 'white', border: '3px solid black'}}>
            <img src={stockIm} alt="No" />
            <div>
            <h3>Jordan Walker</h3>
            <h4>React Creator</h4>
            <p> Lorem Ipsem </p>
            </div>
        </div>
        </>
    );
}

export default contactUserCard