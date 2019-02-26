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
        <strong>Centro de Atención Integral</strong> con énfasis en la atención psicológica y manejo del estrés, a las familias, madres, parejas y personas en general.
        Tenemos como finalidad acoger y enseñar a las personas a obtener un <strong>equilibrio emocional</strong>. 
      </p>
    </Container>
  );
}
