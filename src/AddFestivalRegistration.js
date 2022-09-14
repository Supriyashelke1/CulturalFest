import React, { Fragment, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Pay from "./components/Pay";


function AddFestivalRegistration() {
  const [uid, setUid] = useState("");
  const [fid, setFid] = useState("");
  const [noofpeople, setNoOfPeople] = useState("");
  const [foodmenu, setFoodMenu] = useState("");
  const [foodquant, setFoodQuant] = useState("");
  const [foodprice, setFoodPrice] = useState("");
  const [totalamount, setTotalAmount] = useState("");
  const [paymentmode, setPaymentMode] = useState("");

  const handleUidChange = (value) => {
    setUid(value);
  };
  const handleFidChange = (value) => {
    setFid(value);
  };
  const handleNoOfPeopleChange = (value) => {
    setNoOfPeople(value);
  };
  const handleFoodMenuChange = (value) => {
    setFoodMenu(value);
  };
  const handleFoodQuantChange = (value) => {
    setFoodQuant(value);
  };
  const handleFoodPriceChange = (value) => {
    setFoodPrice(value);
  };
  const handleTotalAmountChange = (value) => {
    setTotalAmount(value);
  };
  const handlePaymentModeChange = (value) => {
    setPaymentMode(value);
  };

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    if (uid === "" || fid === "" || noofpeople === "" || paymentmode=== "") {
      alert("Please Fill The Required Fields");
    }
    else{
      const data = {
        Uid: uid,
        Fid: fid,
        NoOfPeople: noofpeople,
        FoodMenu: foodmenu,
        FoodQuant: foodquant,
        FoodPrice: foodprice,
        TotalAmount: totalamount,
        PaymentMode: paymentmode,
      };
  
      console.log("data: ", data);
  
      const url =
        "https://localhost:44370/api/TestFestivalRegistration/AddFestivalRegistration";
      axios
        .post(url, data)
        .then((result) => {
          console.log("result: ", result);
  
          if (result.data === "Data Inserted Successfully") {
            alert(result.data);
            navigate("/Pay");
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
        width="1400"
        height="600"
        src="https://static.india.com/wp-content/uploads/2022/08/Maharashtra-Dahihandi.png"
      />
      <div className="left_data p-1" style={{ width: "100%" }}>
        <div className="right_data" style={{ width: "100%" }}>
          <h3 className="pt-3 mb-3 mt-10" style={{ textAlign: "center" }}>
            {" "}
            Festival Registeration{" "}
          </h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(event) => setUid(event.target.value)}
                name="uid"
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter your User Id"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                onChange={(event) => setFid(event.target.value)}
                name="fid"
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="Enter your Festival Id"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                value={noofpeople}
                onChange={(event) => setNoOfPeople(event.target.value)}
              >
                <option value=""> Select no of people </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                value={foodmenu}
                onChange={(event) => setFoodMenu(event.target.value)}
              >
                <option value=""> Select food menu </option>
                <option value="samosa">Samosa</option>
                <option value="samosa">Coffee</option>
                <option value="panipuri">Panipuri</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                value={foodquant}
                onChange={(event) => setFoodQuant(event.target.value)}
              >
                <option value=""> Select food quantity </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control
                onChange={(event) => setFoodPrice(event.target.value)}
                name="foodprice"
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder=" FoodPrice"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Control
                onChange={(event) => setTotalAmount(event.target.value)}
                name="totalamount"
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }}
                placeholder="TotalAmount"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select
                style={{ boxShadow: "1px 1px 1px 0.5px #354052" }} value={paymentmode} onChange={(event) => setPaymentMode(event.target.value)}>
              <option value=""> Select Payment Mode </option>  
              <option value="grapefruit"> Online </option>
            </Form.Select>
            </Form.Group>

            <div style={{ display: "flex" }}>
              <Button
                variant="btn btn-outline-dark"
                style={{
                  marginRight: "auto",
                  boxShadow: "1px 1px 1px 0.5px #354052",
                }}
                onClick={(event) => handleSave(event)}

              >
                Confirm
              </Button>
              <p>
                Go to
                <span>
                  <a href="/"> Home</a>
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddFestivalRegistration;
