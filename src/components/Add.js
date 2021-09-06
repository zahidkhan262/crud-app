import React from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Add() {
  return (
    <div>
      <Form>
        <FormGroup>
          <FormControl type="text" placeholder="Enter your Name.." />
        </FormGroup>
        <Button type="submit" className="my-3 ">
          Submit
        </Button>
        <Link to="/" className="btn btn-danger mx-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}

export default Add;
