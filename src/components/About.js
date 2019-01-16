import React from "react";
import { Container } from "reactstrap";

export default function About() {
  const AboutStyles = {
    margin: "1.5rem 1.5rem",
    padding: "2rem 1rem",
    borderLeft: "5px solid steelblue"
  };
  return (
    <Container>
      <p style={AboutStyles}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore porro
        quam dolorem odit repellendus beatae aliquid officiis! Accusamus, rem
        tempora!
      </p>
    </Container>
  );
}
