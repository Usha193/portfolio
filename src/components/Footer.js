import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer starry-footer">
      <Row>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Usha193"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/usha-sree-palleboyina-002810207/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="footer-copywright">
          <p>
            © 2025 <strong>Usha Sree</strong> — Designed with{" "}
            <FaHeart style={{ color: "#ff4b5c", marginBottom: "2px" }} />.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
