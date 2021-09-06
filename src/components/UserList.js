import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
function UserList() {
  return (
    <>
      <ListGroup>
        <ListGroupItem className="d-flex">
          <strong>User One</strong>

          <div className="justify-content-end mx-auto">
            <Link className="btn btn-warning mx-2 text-white" to="/edit/1">
              Edit
            </Link>
            <Button className="btn btn-danger">Delete</Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default UserList;
