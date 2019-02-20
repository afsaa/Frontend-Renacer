import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

library.add(faArrowLeft);

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

export default function Contact() {
  return (
    <Container fluid>
      <Row>
        <Col xs="12" sm="6" md="6" lg="6" style={{ backgroundColor:"#7DA7CA", height: "100vh" }}>
          <Link to="/"><Button color="link" className="m-2"><FontAwesomeIcon icon="arrow-left" /> Volver</Button></Link>
          <h3 className="text-center mx-auto">Cuentanos que ayuda necesitas y te contestaremos en un transcurso de 24 horas.</h3>
          <blockquote className="blockquote text-center mt-2">
            <p className="mb-0">Porque nadie puede saber por ti. Nadie puede crecer por ti. Nadie puede buscar por ti. Nadie puede hacer por ti lo que tú mismo debes hacer. La existencia no admite representantes.</p>
            <footer className="blockquote-footer">Jorge Bucay</footer>
          </blockquote>
        </Col>
        <Col xs="12" sm="6" md="6" lg="6" style={{ backgroundColor:"#315B7D", height:"100vh" }}>
          <h2 className="text-center mt-5">Contacto</h2>
          <Form name="contacto" method="POST" action="/exito" data-netlify="true" data-netlify-honeypot="bot-field" className="mx-auto" onSubmit={ () => <Redirect to="/exito"/> }>
            <input type="hidden" name="form-name" value="contacto" />
            <FormGroup>
                <Label for="exampleText">Nombre</Label>
                <Input type="text" name="name" placeholder="Nombre" required/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Correo</Label>
                <Input type="email" name="email" placeholder="Correo" required/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Escribenos tu mensaje</Label>
                <Input type="textarea" name="message" required/>
            </FormGroup>
            <Button type="submit" className="btn-success">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
