import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (value) => {
    setName(value);
  };
  const handleContactNoChange = (value) => {
    setContactNo(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const navigate = useNavigate();
 
  function isValidPassword(password) {
    return/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/.match(password)

    ;
  }




  const handleSave = (event) => {
    event.preventDefault();

    if (name === "" || contactNo === "" || email === "" || password === "") {
      alert("Please Fill The Required Fields");
    } else if (contactNo.length !== 10) {
      alert("Contact number should be of 10 digits");
    } else if((/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+/.test(('#email').val()))) {
      
      alert("Valid Email is Required");
    } else if (!isValidPassword(event.target.value)) {
      alert("Enter Valid Password-min Length of 8 Char,One Uppercase,One Lowercase,Special Symbol,Number");
    } 

    else {
      const data = {
        Name: name,
        ContactNo: contactNo,
        Email: email,
        UserPassword: password,
        IsActive: 1,
      };

      const url = "https://localhost:44370/api/Test/Registration";
      axios
        .post(url, data)
        .then((result) => {
          console.log("result: ", result);

          if (result.data === "Data Inserted Successfully") {
            alert(result.data);
            navigate("/Login");
          } else alert(result.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <div
      className="d-flex justify-content-end padding-top:30px"
      style={{ backgroundColor: "#e6f5ff", height: "800px" }}
    >
      <img
        width="700"
        height="700"
        src="https://www.holidify.com/images/cmsuploads/compressed/4_20180703193919.jpg"
      />
      <div className="left_data p-1" style={{ width: "100%" }}>
        <h1
          className="text-center mb-2 mt-5 font-weight:5"
          style={{ fontFamily: "serif", color: "#000080" }}
        >
          {" "}
          CulturOFest <i class="fa fa-ravelry" aria-hidden="true" />{" "}
        </h1>
        <h3 className="text-center mb-3 mt-1"> Create an Account </h3>
        <h3 className="text-center mb-4 "> SignUp </h3>

        <Form>
          <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
            <Form.Control
              onChange={(event) => setName(event.target.value)}
              name="name"
              size="lg"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter your Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              onChange={(event) => setContactNo(event.target.value)}
              name="mobile"
              size="lg"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter your Phone-No"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              onChange={(event) => setEmail(event.target.value)}
              size="lg"
              type="email"
              name="email"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter your Email-ID"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              name="password"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              variant="btn btn-outline-dark"
              size="lg"
              type="submit"
              onClick={(event) => handleSave(event)}
            >
              SignUp
            </Button>
          </div>
        </Form>
        <p className="mb-3">
          {" "}
          Already have an account?
          <span>
            {" "}
            <a href="/signin"> Login </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Registration;
