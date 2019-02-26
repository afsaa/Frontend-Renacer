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
          <blockquote className="blockquote text-center mt-2">
            <p className="my-4 h3">No puedo con todo... Y está bien.</p>
          </blockquote>
          <h4 className="text-center my-4">Sí, está bien sentir que no puedes cargar con tantas situaciones y que necesitas ayuda.</h4>
          <h4 className="text-center my-4">Cuentanos como te podemos ayudar. Te contestaremos en un transcurso de 24 horas.</h4>
        </Col>
        <Col xs="12" sm="6" md="6" lg="6" style={{ backgroundColor:"#315B7D", height:"100vh" }}>
          <h2 className="text-center mt-5"><strong>Contacto</strong></h2>
          <Form name="contacto" method="POST" action="/exito" data-netlify="true" data-netlify-honeypot="bot-field" className="mx-auto" onSubmit={ () => <Redirect to="/exito"/> }>
            <input type="hidden" name="form-name" value="contacto" />
            <FormGroup>
                <Input type="text" name="name" placeholder="Nombre" required/>
            </FormGroup>
            <FormGroup>
                <Input type="email" name="email" placeholder="Correo" required/>
            </FormGroup>
            <FormGroup>
                <Label for="message">Escribenos tu mensaje</Label>
                <Input type="textarea" name="message" required/>
            </FormGroup>
            <Button type="submit" className="btn-success">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
