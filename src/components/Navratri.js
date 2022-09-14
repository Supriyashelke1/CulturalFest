import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import AddFestivalRegistration from "../AddFestivalRegistration";

function Navratri() {
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor:"#e6e6ff", height:"800px"}}>
    <Card className="container" style={{boxShadow: "1px 1px 1px 0.5px #354052" , top:"6%", boxSizing: 'content-box' }}>
    <Card.Img style={{height:"500px" }} variant="top" src="https://mumbaimirror.indiatimes.com/thumb/msid-66137769,width-1200,height-900,resizemode-4/.jpg" />
        <Card.Header style={{color:"#0080ff" , fontSize:"1.3rem"}}> Coming Soon </Card.Header>
        <Card.Body>
          <Card.Title> Navaratri </Card.Title>
          <Card.Text> 
          <p><i ></i> Fee:Rs.300  </p>

             <p><i class="fa fa-calendar" aria-hidden="true"></i> Mon, 26 Sep 2022 - Wed, 05 Oct 2022</p>
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> Kora Kendra Grounds,Borivali(W)  </p>
          
            <p> Navratri is an auspicious festival of 9 days which is celebrated with great zeal across India by lacs of devotees<br/>As varied as the local cultures are throughout India, 
            so too are the celebrations of Navratri, which come in different flavors in different parts of the country. However, the spirit of Navratri and the wisdom of these old traditions 
            is a common thread tying all these diverse celebrations together. </p>
            <p> Please join us on this Navaratri for Dandiya and Gardba nights at KoraKendra Grounds,Borivali(W)</p>
          
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/AddFestivalRegistration")}>
          {" Festival Registeration "}
        </Button>
        </Card.Body>
      </Card>
      </div>


  );
}

export default Navratri;