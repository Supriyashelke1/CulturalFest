import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddFestivalRegistration from "./AddFestivalRegistration";
import Registration from "./Registration";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminLogin from "./AdminLogin";
import AddFestival from "./AddFestival";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === "admin@gmail.com" && password === "Admin@11") {
      navigate("/AddFestival");
    }
    else if(email === "" || password === "") {
      alert("Please Fill The Required Fields");
    } else if (!email.includes("@" && ".")) {
      alert("Valid Email is Required");
    } else if (password.length < 4) {
      alert("Password Length Should be more than 4");
    } else {
      const data = {
        Email: email,
        UserPassword: password,
      };
      console.log("data: ", data);

      const url = "https://localhost:44370/api/Test/Login";
      axios
        .post(url, data)
        .then((result) => {
          console.log("result: ", result);
          if (result.data === "Login Successful") {
            alert(result.data);
            localStorage.setItem("email", email);
            navigate("/AddFestivalRegistration");
          } else alert(result.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <div
      className="d-flex justify-content-end "
      style={{ backgroundColor: "#e6f5ff", height: "800px" }}
    >
      <img
        width="1500"
        height="615"
        src="https://www.tripsavvy.com/thmb/Vr3dZiKiMM7z3FBgZQpsvYACtJI=/725x408/smart/filters:no_upscale()/GettyImages-533194649-56b1d7423df78cdfa002f1f4.jpg"
      />
      <div className="left_data p-3" style={{ width: "100%" }}>
        <h1
          className="text-center mb-2 pt-3 mt-5 font-weight:5"
          style={{ fontFamily: "serif", color: "#000080" }}
        >
          {" "}
          CulturOFest <i class="fa fa-ravelry" aria-hidden="true" />{" "}
        </h1>
        <h4 className="text-center mb-3 mt-1"> Welcome back! </h4>
        <h3 className="text-center mb-4"> Login </h3>
        <Form>
          <Form.Group className="mb-4 text-center">
            <Form.Control
              name="email"
              size="lg"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter your Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-center">
            <Form.Control
              name="password"
              type="password"
              size="lg"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter your Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="btn btn-outline-dark"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              size="lg"
              type="submit"
              onClick={(event) => handleLogin(event)}
            >
              Login
            </Button>
            <p className="mb-3">
              {" "}
              OR{" "}
              <span>
                {" "}
                <a href="/Registration"> SignUp </a>
              </span>
            </p>

            {/* <p className="mb-3">
              {" "}
              <span>
                {" "}
                <a href="/AdminLogin">Admin </a>
              </span>
            </p> */}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
