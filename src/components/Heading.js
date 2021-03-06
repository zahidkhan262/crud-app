import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
              <Link className="btn  btn-primary px-2" to="/add">
                Add User <FontAwesomeIcon icon={faPlus} />
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Nav>
    </>
  );
}

export default Heading;
