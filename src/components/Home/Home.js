import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import Particle from "../Particle";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">Hi There! 👋🏻</h1>
              <h1 className="heading-name">
                I'M <strong className="main-name">USHA SREE PALLEBOYINA</strong>
              </h1>

              <div style={{ paddingTop: 30, textAlign: "left" }}>
                <h2>
                  <Typewriter
                    words={[
  "Graduate Student at the University of Florida",
  "Aspiring Software Developer",
  "Emerging Machine Learning Engineer",
  "Exploring the Fusion of AI and Cloud Technologies",
  "Turning Data into Intelligent, Scalable Solutions"
]}

                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img src={myImg} alt="home pic" className="img-fluid" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
  I’m a <b className="purple">Graduate Student at the University of Florida</b> passionate about 
  creating technology that makes a difference.  
  I love merging <b className="purple">Software Development</b> and <b className="purple">Artificial Intelligence</b> to build solutions that are intelligent, efficient, and meaningful.  
  My work focuses on turning data and ideas into scalable systems that empower people and inspire progress.  
  I believe great code should not only work it should <b className="purple">create impact.</b>  
</p>


            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
