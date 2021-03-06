import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar bg-light d-flex justify-content-center">
        <Link to={"/"}>
          <h1 className="text-warning d-flex justify-content-start">
            <i className="fas fa-home"></i>
            <h1>Pickr</h1>
          </h1>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
