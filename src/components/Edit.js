import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormGroup, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
const Edit = (props) => {
  // const [selectedUser, setSelectedUser] = useState({
  //   id: uuidv4(),
  //   name: "name",
  //   email: "email",
  //   mobileNo: "mobileNo",
  // });

  const [selectedUserName, setSelectedUserName] = useState("");
  const [selectedUserEmail, setSelectedUserEmail] = useState("");
  const [selectedUserPhone, setSelectedUserPhone] = useState("");

  const { users, editUser } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    const currentUserId = props.match.params[1];
    users.map((singleUser) => {
      if (singleUser.id == currentUserId) {
        setSelectedUserName(singleUser.name);
        setSelectedUserEmail(singleUser.email);
        setSelectedUserPhone(singleUser.mobileNo);
      }
    });
  }, []);

  const onSubmit = () => {
    const selectedUser = {
      id: props.match.params[1],
      name: selectedUserName,
      email: selectedUserEmail,
      mobileNo: selectedUserPhone,
    };

    editUser(selectedUser);

    toast.success("Successfully Updated");
    history.push("/");
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            name="name"
            value={selectedUserName}
            onChange={(event) => setSelectedUserName(event.target.value)}
            placeholder="Add Name.."
          />
        </FormGroup>
        <FormGroup className="mt-2">
          <FormControl
            type="email"
            name="email"
            value={selectedUserEmail}
            onChange={(event) => setSelectedUserEmail(event.target.value)}
            placeholder="Add Email.."
          />
        </FormGroup>
        <FormGroup className="mt-2">
          <FormControl
            type="text"
            maxLength="10"
            name="mobileNo"
            value={selectedUserPhone}
            onChange={(event) => setSelectedUserPhone(event.target.value)}
            placeholder="Add Mobile no.."
          />
        </FormGroup>
        <Button type="submit" className="my-3 px-3 ">
          Edit User <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Link to="/" className="btn btn-danger mx-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
