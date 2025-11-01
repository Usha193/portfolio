import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Usha Sree Palleboyina</span>, an{" "}
            <span className="purple">aspiring Software Developer</span> and{" "}
            <span className="purple">AI Enthusiast 🤖</span>, currently pursuing my{" "}
            <span className="purple">Master’s in Computer and Information Science Engineering</span>{" "}
            at the <span className="purple">University of Florida 🐊</span>.
            <br />
            <br />
            With a strong foundation in{" "}
            <span className="purple">Computer Science Engineering</span> from
            Vignan Lara Institute of Technology and Science, I’m passionate about
            blending <span className="purple">software development 💻</span> and{" "}
            <span className="purple">artificial intelligence 🧠</span> to create
            scalable, human-centered, and data-driven applications.
            <br />
            <br />
            My experience spans across developing intelligent systems using{" "}
            <span className="purple">Python, React, Flask, and AWS</span> designing
            ML-powered pipelines and web apps that transform innovative ideas into
            impactful, real-world solutions.
            <br />
            <br />
            Outside of work, I express my creativity in many ways:{" "}
            <span className="purple">singing 🎤</span>,{" "}
            <span className="purple">playing badminton 🏸</span> and{" "}
            <span className="purple">chess ♟️</span>, or{" "}
            <span className="purple">cooking 👩🏻‍🍳</span> my favorite comfort food after a long
            coding day!
          </p>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            “Transforming ideas into intelligent, impactful, and inspiring technology.”{" "}
          </p>
          <footer className="blockquote-footer">Usha Sree</footer>

          <ul style={{ marginTop: "15px" }}>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & Cloud-driven innovations ☁️
            </li>
            <li className="about-activity">
              <ImPointRight /> Building full-stack & data-intensive applications ⚙️
            </li>
            <li className="about-activity">
              <ImPointRight /> Combining creativity and logic through code ✨
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
