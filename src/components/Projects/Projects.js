import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// === Import your project images ===
import rtsProject from "../../Assets/Projects/rts.png";
import nlpInterview from "../../Assets/Projects/nlpInterview.png";
import crimePredict from "../../Assets/Projects/crimePredict.png";
import musicTDA from "../../Assets/Projects/musicTDA.png";
import plantAI from "../../Assets/Projects/plantAI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* === RTS Project === */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rtsProject}
              title="Retrogressive Thaw Slumping (RTS) ArcticDEM Analysis"
              description="Quantified volumetric loss and carbon release from 2,747 active retrogressive thaw slump sites across the Northern Hemisphere using ArcticDEM (2012–2022), ERA5 reanalysis, and deep learning segmentation (Mask R-CNN). Published in Nature Communications (2025)."
              ghLink="https://github.com/Usha193/RTS"
            />
          </Col>

          {/* === NLP Interviewer === */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlpInterview}
              title="NLP-Based Virtual Interviewer"
              description="An intelligent, voice-interactive interview simulator that conducts mock interviews, converts speech to text, and evaluates responses using CNN-based embeddings and cosine similarity. Provides automated grading and feedback for conceptual and communication improvement."
              ghLink="https://github.com/Usha193/virtual-interviewer"
            />
          </Col>

          {/* === Crime Prediction === */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crimePredict}
              title="Sensitive Data Redaction & Crime Prediction"
              description="An end-to-end NLP and ML platform for automated PII redaction, contextual entity recovery, and crime-pattern forecasting. Includes an interactive Streamlit dashboard with Google Maps visualization for hotspot and time-based crime trend analysis."
              ghLink="https://github.com/Usha193/crime-prediction"
            />
          </Col>

          {/* === Music TDA === */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicTDA}
              title="Topological Music Explorer & Culture Detector"
              description="A cross-disciplinary platform combining Music Theory, Machine Learning, and Topological Data Analysis (TDA) to visualize and classify music from MIDI files. Extracts persistence diagrams, Betti curves, and topological summaries to detect musical culture or composer."
              ghLink="https://github.com/Usha193/music_culture_detection"
            />
          </Col>

          {/* === Plant AI === */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plantAI}
              title="Plant AI — Deep Learning for Leaf Disease Detection"
              description="A deep-learning model built with PyTorch for automated plant disease recognition from leaf images, trained on the 'New Plant Diseases Dataset' with 38 disease classes and 14 plant species. Achieved 98.4% accuracy using CNN, VGG16, and ResNet34 architectures."
              ghLink="https://github.com/Usha193/plant_disease_detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
