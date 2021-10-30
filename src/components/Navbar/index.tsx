import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Navbar = React.memo(() => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </header>
  );
});

export default Navbar;
