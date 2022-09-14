import React, { Fragment, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function AddFestival() {
  const [festivalname, setFestivalName] = useState("");
  const [festivaldate, setFestivalDate] = useState("");
  const [festivaladdress, setFestivalAddress] = useState("");
  // const [festivalnoofpeople, setFestivalNoofpeople] = useState("");
  const [festivalfees, setFestivalFees] = useState("");

  const handleFestivalNameChange = (value) => {
    setFestivalName(value);
  };
  const handleFestivalDateChange = (value) => {
    setFestivalDate(value);
  };
  const handleFestivalAddressChange = (value) => {
    setFestivalAddress(value);
  };
  // const handleFestivalNoofpeopleChange = (value) => {
  //   setFestivalNoofpeople(value);
  // };
  const handleFestivalFeesChange = (value) => {
    setFestivalFees(value);
  };

  const navigate = useNavigate();

  const handleSave = () => {
    const data = {
      FestivalName: festivalname,
      FestivalDate: festivaldate,
      FestivalAddress: festivaladdress,
      // FestivalNoofpeople: festivalnoofpeople,
      FestivalFees: festivalfees,
    };
    const url = "https://localhost:44370/api/TestFestival/AddFestival";
    axios
      .post(url, data)
      .then((result) => {
        console.log("result: ", result);

        if (result.data === "Data Inserted Successfully") {
          alert(result.data);
          navigate("/");
        } else alert(result.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div
      className="d-flex justify-content-end padding-top:30px"
      style={{ backgroundColor: "#e6f5ff", height: "800px" }}
    >
      <img
        width="700"
        height="700"
        src="https://blogliterati.com/wp-content/uploads/2019/12/960x0.jpg"
      />
      <div className="left_data p-1" style={{ width: "100%" }}>
        <h1
          className="text-center mb-2 mt-5 font-weight:5"
          style={{ fontFamily: "serif", color: "#000080" }}
        >
          {" "}
          CulturOFest <i class="fa fa-ravelry" aria-hidden="true" />{" "}
        </h1>
       

        <Form>
          <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
            <Form.Control
              onChange={(event) => setFestivalName(event.target.value)}
              name="festivalname"
              size="lg"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter Festival Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              onChange={(event) => setFestivalDate(event.target.value)}
              name="festivaldate"
              size="lg"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter Festival Date"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              onChange={(event) => setFestivalAddress(event.target.value)}
              size="lg"
              type="text"
              name="festivaladdress"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter Festival Address"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              onChange={(event) => setFestivalFees(event.target.value)}
              type="text"
              name="festivalfees"
              style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
              placeholder="Enter Festival Fees"
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
              Save
            </Button>
          </div>
        </Form>
        
      </div>
    </div>
    
  );
}

export default AddFestival;
