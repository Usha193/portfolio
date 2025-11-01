import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* === About Text Section === */}
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                👩🏻‍💻 Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          {/* === Skillset Section === */}
          <h1 className="project-heading">
            🧠 My <strong className="purple">Professional Ingredients</strong>
          </h1>
          <Techstack />

          {/* === Tools Section === */}
          <h1 className="project-heading">
            🛠️ The <strong className="purple">Tools & Flavors</strong> I Use
          </h1>
          <Toolstack />

          {/* === GitHub Section (heading removed) === */}
          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
