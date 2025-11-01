import React from "react";
import { Col, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Azure from "../../Assets/TechIcons/Azure.svg";
import Flask from "../../Assets/TechIcons/Flask.svg";
import FastAPI from "../../Assets/TechIcons/FastAPI.svg";
import Jupyter from "../../Assets/TechIcons/Jupyter.svg";
import Tableau from "../../Assets/TechIcons/Tableau.svg";
import PowerBI from "../../Assets/TechIcons/PowerBI.svg";
import RLang from "../../Assets/TechIcons/R.svg";
import JSONIcon from "../../Assets/TechIcons/JSON.svg";

function Techstack() {
  const technologies = [
    // Core languages
    { src: C, name: "C++" },
    { src: Python, name: "Python" },
    { src: Java, name: "Java" },
    { src: Javascript, name: "JavaScript" },
    { src: Typescript, name: "TypeScript" },
    { src: HaskellIcon, name: "Haskell" },
    { src: RLang, name: "R" },
    { src: JSONIcon, name: "JSON" },

    // Frameworks & Libraries
    { src: Node, name: "Node.js" },
    { src: ReactIcon, name: "React.js" },
    { src: Flask, name: "Flask" },
    { src: FastAPI, name: "FastAPI" },
    { src: Tailwind, name: "Tailwind CSS" },

    // Databases & Tools
    { src: SQL, name: "PostgreSQL" },
    { src: Mongo, name: "MongoDB" },
    { src: Docker, name: "Docker" },

    // Cloud & DevOps
    { src: AWS, name: "AWS" },
    { src: Azure, name: "Azure" },
    { src: Git, name: "Git" },

    // Analytics & Visualization
    { src: Jupyter, name: "Jupyter" },
    { src: Tableau, name: "Tableau" },
    { src: PowerBI, name: "Power BI" },

    // API & Testing
    { src: Postman, name: "Postman" },
  ];

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      {technologies.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <img src={tech.src} alt={tech.name} className="tech-icon-images" />
          <div className="tech-icons-text">{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
