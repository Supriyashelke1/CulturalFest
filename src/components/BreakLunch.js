import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function BreakLunch() {
  const navigate = useNavigate();
  return (
    <CardGroup>
    <Card style={{ height:'13rem' }}>
      <Card.Img style={{height:'30rem'}} src="https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title> Samosa </Card.Title>
        <Card.Text> <i class="fa fa-clock-o" aria-hidden="true"></i> 5:30 PM - 10:00 PM</Card.Text>
        <p><i class="fa fa-inr" aria-hidden="true"></i> 25</p>
        <Button variant="primary" onClick={() => navigate("/Pay")}> Buy Now </Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img style={{height:'30rem'}} src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title> Coffee </Card.Title>
        <Card.Text> <i class="fa fa-clock-o" aria-hidden="true"></i> 5:30 PM - 10:00PM </Card.Text>
        <p><i class="fa fa-inr" aria-hidden="true"></i> 30  </p> 
        <Button variant="primary" onClick={() => navigate("/Pay")}>Buy Now </Button>
      </Card.Body>
    </Card>
    
    <Card>
      <Card.Img style={{height:'30rem'}} src="https://images.pexels.com/photos/13041629/pexels-photo-13041629.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title> Pani-Puri </Card.Title>
        <Card.Text><i class="fa fa-clock-o" aria-hidden="true"></i> 5:30 PM - 10:00PM </Card.Text>
        <p><i class="fa fa-inr" aria-hidden="true"></i> 20  </p> 
        <Button variant="primary" onClick={() => navigate("/Pay")}>Buy Now </Button>
      </Card.Body> 
    </Card>
  </CardGroup>
  
  );
}

export default BreakLunch;