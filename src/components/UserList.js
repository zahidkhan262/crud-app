import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../context/GlobalState";
import { toast } from "react-toastify";
const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  const deleteUser = () => {
    toast.error("Successfully Deleted");
  };
  return (
    <>
      <ListGroup>
        {users.length > 0 ? (
          <>
            {users.map((user) => (
              <ListGroupItem className="mt-3 bg-dark text-white rounded pt-2 ">
                <p className="list">{`User Name : ${user.name}`}</p>
                <p className="list">{`User Email : ${user.email}`}</p>
                <p className="list">{`User Mobile : ${user.mobileNo}`}</p>

                <div className="justify-content-end mx-auto">
                  <Link
                    className="btn btn-warning mx-2 text-white"
                    to={`/edit/${user.id}`}
                  >
                    Edit
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <Button
                    onClick={() => {
                      removeUser(user.id);
                      deleteUser();
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </>
        ) : (
          <h4 className="text-center mt-3">No Data here....</h4>
        )}
      </ListGroup>
    </>
  );
};

export default UserList;
