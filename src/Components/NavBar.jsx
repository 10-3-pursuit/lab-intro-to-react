import React from "react";

const NavBar = () => {
  return (
    <div style={{ border: "2px solid aqua", textAlign: "right" }}>
      <nav style={{ backgroundColor: "aqua" }} className="nav">
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
