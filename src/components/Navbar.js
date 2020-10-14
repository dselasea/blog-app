import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Daniel Selase</Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about" href="#">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" href="#">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
