import React from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Edit() {
  return (
    <div>
      <Form>
        <FormGroup>
          <FormControl type="text" placeholder="Edit Your Name.." />
        </FormGroup>
        <Button type="submit" className="my-3 ">
          Edit
        </Button>
        <Link to="/" className="btn btn-danger mx-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
