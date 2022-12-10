import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <ul>
      <li>
        <Link className="link" to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link className="link" to="/terms">
          TERMS & CONDITIONS
        </Link>
      </li>
      <li>
        <Link className="link" to="/footer">
          FOOTER
        </Link>
      </li>
      <li>
        <Link className="link" to="/"></Link>
      </li>
    </ul>
  );
};

export default Navbar;
