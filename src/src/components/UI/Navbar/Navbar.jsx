import React from 'react';
import { Link } from "react-router-dom";

import "../../../styles/App.css";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
        <div className="navbar-items">
          <Link className="navbar-tem" to="/posts">Home</Link>
        </div>
      </div>
    );
};

export default Navbar;