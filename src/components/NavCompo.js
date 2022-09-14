import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavCompo.css";
import Login from "../Login";
import Registration from "../Registration";
import AddFestival from "../AddFestival";
import AdminRegistration from "../AdminRegistration";

const NavCompo = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("email" || "admin@gmail.com");
    navigate("/login");
  };
  console.log('localStorage.getItem("email"): ', localStorage.getItem("email"));
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <div className="container-fluid mx-5">
          <Navbar.Brand href="/">
            <i class="fa fa-ravelry" aria-hidden="true" /> CulturOFest{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
              <NavDropdown
                className="item-hover"
                title="Events"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/ganeshafest">
                  Ganesha Chaturthi
                </NavDropdown.Item>
                <NavDropdown.Item href="/navratri">Navratri</NavDropdown.Item>
                <NavDropdown.Item href="/diwali"> Diwali </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/breaklunch">
                  Breakfast/Lunch
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="item-hover"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Nav.Link>
              {localStorage.getItem("email") ? (
                <Nav.Link className="item-hover" onClick={logout}>
                  Logout
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    className="item-hover"
                    onClick={() => navigate("/Login")}
                  >
                    Login
                  </Nav.Link>
                  {/* <Nav.Link
                    className="item-hover"
                    onClick={() => navigate("/Registration")}
                  >
                    SignUp
                  </Nav.Link> */}
                </>
              )}
              {/* <Nav.Link
                className="item-hover"
                onClick={() => navigate("/AddFestival")}
              >
                Festival
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};
export default NavCompo;
