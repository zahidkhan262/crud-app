import React from "react";
import { Link } from "react-router-dom";
import { Nav, Form, NavItem } from "react-bootstrap";
function Heading() {
  return (
    <>
      <Nav className="navbar navbar-light bg-dark p-2">
        <div className="container-fluid">
          <a className="navbar-brand text-white-50" href="/">
            CRUD
          </a>
          <Nav>
            <NavItem>
              <Link className="btn  btn-primary" to="/add">
                Add User
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Nav>
    </>
  );
}

export default Heading;
