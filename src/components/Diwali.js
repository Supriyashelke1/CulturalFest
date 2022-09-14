import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import AddFestivalRegistration from "../AddFestivalRegistration";

function Diwali() {
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor:"#e6e6ff", height:"800px"}}>
    <Card className="container" style={{boxShadow: "1px 1px 1px 0.5px #354052" , top:"6%", boxSizing: 'content-box' }}>
    <Card.Img style={{height:"500px" }} variant="top" src="https://www.clubmahindra.com/blog/media/section_images/diwali2020-82351d580ebc926.jpg" />
        <Card.Header style={{color:"#0080ff" , fontSize:"1.3rem"}}> Coming Soon </Card.Header>
        <Card.Body>
          <Card.Title> Diwali </Card.Title>
          <Card.Text>
          <p><i ></i> Fee:Rs.400  </p>

          <p><i class="fa fa-calendar" aria-hidden="true"></i> 
          Fri, 21 Oct 2022 - Wed, 26 Oct 2022</p>
          <p><i class="fa fa-map-marker" aria-hidden="true"></i> Priyadarshani Club Ground, Mumbai</p>
          <p>Diwali, the wonderful Festival of Light (also called Divali or in Sanskrit, Deepavali or Deepawali) is one of the greatest festivities of India: the beginning of the Hindu New Year. The festivities take place on the fifteenth day of the second dark fortnight of the month of kārttika (which can take place between October and November each year), and can last four or five days. During this period, countries such as India, Nepal or Sri Lanka are filled with lights and colours to celebrate the triumph of good over
             evil. In Diwali 2021, the time has come to light up millions of lights and celebrate this very special holiday.</p>
          <p>On this Diwali occasion,lets come together and celebrate the victory of light over darkness.</p>
          <p>Request to join for performing worship ceremonies of Lakshmi,the goddess of prosperity and wealth,light fireworks, and partake in family fests where
            mithai and gifts are shared </p>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/AddFestivalRegistration")}>
            {" Festival Registeration "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Diwali;