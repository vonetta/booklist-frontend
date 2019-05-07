import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: props.color }}
      >
        <NavLink className="navbar-brand" to="/">
          {new Date().getFullYear()} BookList Tracker{" "}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ">
            <NavLink to="/book-list" className="nav-link">
              Book List
            </NavLink>
            <NavLink to="/new-book" className="nav-link">
              New Book
            </NavLink>
            {/* <NavLink to="/sign-up" className="nav-link">Sign Up</NavLink>
                        <NavLink to="/login" className="nav-link">Login</NavLink> */}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
