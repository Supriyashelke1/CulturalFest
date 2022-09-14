import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {useNavigate} from "react-router-dom";



function Explore() {
    const navigate = useNavigate()
    return (
      <div className="fluid-container" style={{backgroundColor:"#e6e6ff", height:"700px"}}>
        <Carousel>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/1726/9835/articles/Ganesh-Chaturthi-Celebration-in-India_1024x1024.jpg?v=1537248277"
              alt="Ganesha"
            />
            <Carousel.Caption>
              <h3
                style={{ color: "white", FontWeight: "bold", fontSize: "2rem" }}
              >
                {" "}
                Ganehsa Chaturthi{" "}
                {/* <Badge pill bg="warning" style={{ fontSize: "1rem" }}>
                  {" "}
                  Upcoming{" "}
                </Badge> */}
              </h3>
              <p> Event Start: 31-08-2022 Evenet End Date: 09-09-2022</p>
              {/* <Button variant="outline-warning" onClick={()=>navigate("/register")}>
                {" "}
                Register{" "}
              </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mumbaimirror.indiatimes.com/thumb/msid-66137769,width-1200,height-900,resizemode-4/.jpg"
              alt=" Navaratri"
            />
            <Carousel.Caption>
              <h3
                style={{ color: "white", FontWeight: "bold", fontSize: "2rem" }}
              >
                {" "}
                Navratri{" "}
              </h3>
              <p> Start Date: 26-09-2022 End Date: 05-10-2022 </p>
              {/* <Button variant="primary" onClick={()=>navigate("/register")}> Register </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
         
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.clubmahindra.com/blog/media/section_images/diwali2020-82351d580ebc926.jpg"
              alt="Diwali"
            />
            <Carousel.Caption>
              <h3
                style={{ color: "white", FontWeight: "bold", fontSize: "2rem" }}
              >
                {" "}
                Diwali{" "}
              </h3>
              <p>Start Date:24-10-2022 End Date:26-10-2022</p>
              {/* <Button variant="primary" onClick={()=>navigate("/register")}> Register </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
  
        <div
          className="fluid-container"
          style={{ marginTop: 20 }}
        >
          <div className="row-2">
            <div className="col-md-40">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/idli-half-covered-with-podi-chutney-also-named-as-gunpowder-podi-is-picture-id1334256882?b=1&k=20&m=1334256882&s=170667a&w=0&h=rfKTy_geOytStAsGulV-UIQ2DqFQO6X4fUhjLZemQ7M="
                    alt="Idli"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                       }} Breakfast>
                    </h3>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                        textAlign: "center",
                        // paddingTop: "160px",
                      }}
                    >
                      Idli
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://img.freepik.com/premium-photo/crispy-fafda-with-sweet-jalebi-is-indian-snack-most-popular-gujarat-selective-focus_466689-71769.jpg?w=2000"
                    alt="fafda-jalebi"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}> Breakfast
                    </h3>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                    fafda-Jalebi
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/sambar-rice-sambar-sadam-one-pot-meal-from-south-indian-state-tamil-nadu-kerala_466689-75220.jpg?w=996&t=st=1662269201~exp=1662269801~hmac=21f5338d0a7fb5976cf04e94ce7dac4ea6012c2711d7511411c0921ca1113a1c"
                    alt="Sambar-Rice"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                     Lunch
                    </h3>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                     Sambar-Rice
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/R.993cca48ff864fc5668852ddf6e9385e?rik=%2b1S4HaGJQEEi8w&riu=http%3a%2f%2fcravecookclick.com%2fwp-content%2fuploads%2f2013%2f07%2fIMG_0348-660x440.jpg&ehk=EAx6gqqwEYEos6aUEPlTa5rs5bsE1v99D474wA3agRo%3d&risl=&pid=ImgRaw&r=0"
                    alt="Sabudana Khichadi"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      Breakfast
                    </h3>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      Sabudana Khichadi
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1601050690294-397f3c324515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3Nhc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="Samosa"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      {" "}
                      Breakfast{" "}
                    </h3>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      
                      Samosa
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/wp/wp9939206.jpg"
                    alt="Dhokla"
                  />
                  <Carousel.Caption>
                    <h2
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      
                      {" Breakfast"}
                    </h2>
                    <p
                      style={{
                        color: "white",
                        FontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      
                      {"Dhokla "}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Explore