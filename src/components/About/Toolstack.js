import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import github from "../../Assets/TechIcons/Github.svg"; // Ensure this file exists
import streamlit from "../../Assets/TechIcons/Streamlit.svg"; // Ensure this file exists

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={github}
          alt="GitHub"
          className="tech-icon-images"
          style={{ filter: "brightness(1000%) invert(1)" }}
        />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={streamlit}
          alt="Streamlit"
          className="tech-icon-images"
          style={{ filter: "brightness(1000%) invert(1)" }}
        />
        <div className="tech-icons-text">Streamlit</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
