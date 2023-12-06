import "../Components/NavBar.css";

const NavBar = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "aqua",
        textAlign: "right",
        marginBottom: "20px",
      }}
    >
      <nav style={{ padding: "10px 5px" }} className="nav">
        <button>
          <a style={{ textDecoration: "none" }} href="#">
            What is Pursuit?
          </a>
        </button>
        <button>
          <a style={{ textDecoration: "none" }} href="#">
            Create an account
          </a>
        </button>
        <button>
          <a style={{ textDecoration: "none" }} href="#">
            Sign in
          </a>
        </button>
      </nav>
      <br />
    </div>
  );
};

export default NavBar;
