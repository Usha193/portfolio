import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* === Project image === */}
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="Project thumbnail"
        style={{ borderRadius: "8px 8px 0 0" }}
      />

      {/* === Project content === */}
      <Card.Body style={{ padding: "1rem 1.2rem" }}>
        <Card.Title
          style={{
            marginBottom: "0.6rem",
            lineHeight: "1.3",
            fontWeight: 600,
          }}
        >
          {props.title}
        </Card.Title>

        <Card.Text
          style={{
            textAlign: "justify",
            marginBottom: "0.8rem",
            lineHeight: "1.5",
            color: "#dcdcdc",
          }}
        >
          {props.description}
        </Card.Text>

        {/* === GitHub Button Only === */}
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              backgroundColor: "#6f42c1",
              border: "none",
              padding: "6px 14px",
              borderRadius: "6px",
            }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
