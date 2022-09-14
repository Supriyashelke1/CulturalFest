import { height } from "@mui/system";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import AddFestivalRegistration from "../AddFestivalRegistration";
function GaneshaFest() {
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor:"#e6e6ff", height:"800px"}}>
    <Card className="container" style={{boxShadow: "1px 1px 1px 0.5px #354052" , top:"5%", boxSizing: 'content-box'}}>
    <Card.Img style={{height:"500px" }} variant="top" src="https://cdn.shopify.com/s/files/1/1726/9835/articles/Ganesh-Chaturthi-Celebration-in-India_1024x1024.jpg?v=1537248277"/>
      <Card.Header style={{color:"#0080ff" , fontSize:"1.3rem"}}>Featured</Card.Header>
      <Card.Body>
        <Card.Title style={{fontFamily: "serif"}}> Ganesh Chaturthi </Card.Title>
        <Card.Text>
        <p><i ></i> Fee:Rs.200  </p>

        <p><i class="fa fa-calendar" aria-hidden="true"></i> Wed, 31 Aug 2022 - Fri, 09 Sep 2022</p>
        <p><i class="fa fa-map-marker" aria-hidden="true"></i> Chanda Club Ground,Bandra(W)  </p>
        <p> Ganesha Chaturthi in most places in India is a day to invoke Ganesha, the god of wisdom, prosperity and good fortune. On this day, devotees worship Ganesha idols, perform the aarti and offer prasad of fruits and sweets, especially modak, which is considered to be the favourite of Lord Ganesha. In several places, clay idols of Ganesha, big and small, are made months in advance and thousands of devotees take them home to worship. It is customary to immerse these idols in water
           once the festivities are over with a prayer requesting the god to visit his devotees again the following year.</p>

        </Card.Text>
        <Button variant="primary" onClick={() => navigate("/AddFestivalRegistration")}>
          {" Festival Registeration "}
        </Button>
      </Card.Body>
    </Card>
    </div>
  
    
  );
}

export default GaneshaFest;