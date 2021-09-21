import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Form, FormGroup, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Add = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const { addUser } = useContext(GlobalContext);

  const history = useHistory();
  const onSubmit = () => {
    const newUser = {
      id: uuidv4(),
      name,
      email,
      mobileNo,
    };

    // toastify
    toast.success("Successfully Add User");

    addUser(newUser);
    history.push("/");
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add Name.."
          />
        </FormGroup>
        <FormGroup className="mt-2">
          <FormControl
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add Email.."
          />
        </FormGroup>
        <FormGroup className="mt-2">
          <FormControl
            type="text"
            maxLength="10"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            placeholder="Add Mobile no.."
          />
        </FormGroup>
        <Button type="submit" className="my-3 px-3 ">
          Submit <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Link to="/" className="btn btn-danger mx-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default Add;
