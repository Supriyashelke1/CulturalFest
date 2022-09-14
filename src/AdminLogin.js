import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddFestivalRegistration from "./AddFestivalRegistration";
import Registration from "./Registration";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AddFestival from "./AddFestival";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const navigate = useNavigate();

  const handleAdminLogin = (event) => {
    event.preventDefault()
    let data = {
      Email: email,
      UserPassword: password,

    };
    console.log('data: ', data);


    const url = "https://localhost:44370/api/TestAdmin/AdminLogin";
    axios
      .post(url, data)
      .then((result) => {
        console.log('result: ', result);
        if (result.data==="Login Successful") {
          alert(result.data)
          navigate("/AddFestival");

        }
        else alert(result.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div
      className="d-flex justify-content-end "
      style={{ backgroundColor: "#e6f5ff", height: "800px" }}
    >
      <img
        width="1500"
        height="615"
        src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg?w=2000"
      />
      <div className="left_data p-3" style={{ width: "100%" }}>
        <h1
          className="text-center mb-2 pt-3 mt-5 font-weight:5"
          style={{ fontFamily: "serif", color: "#000080" }}
        >
          {" "}
          CulturOFest <i class="fa fa-ravelry" aria-hidden="true" />{" "}
        </h1>
        <h4 className="text-center mb-3 mt-1"> Admin Login</h4>
        <Form>
          <Form.Group className="mb-4 text-center">
            <Form.Control
              name="email"
              size="lg"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter your Email"
              onChange={(event)=>setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-center">
            <Form.Control
              name="password"
              size="lg"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter your Password"
              onChange={(event)=>setPassword(event.target.value)}

            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="btn btn-outline-dark"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              size="lg"
              type="submit"
              onClick={(event) => handleAdminLogin(event)}
            >
              Login
            </Button>
            
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AdminLogin;
